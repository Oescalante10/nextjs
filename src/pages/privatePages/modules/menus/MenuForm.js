import React, { useState, useContext } from 'react';
import { Context } from '../../../../store/appContext';
import { useEffect } from 'react';
import Form from '../../../../components/forms/form/Form';
import Input from '../../../../components/forms/input/Input';
import Button from '../../../../components/buttons/button/Button';
import ButtonContainer from '../../../../components/buttons/buttonContainer/ButtonContainer';
import Page from '../../../../components/containers/page/Page';

const MenuForm = ({ match, history }) => {

    const { id } = match.params
    const { store, actions } = useContext(Context);
    const { path } = store;
    const [currentMenu, setCurrentMenu] = useState({
        name: ""
    })
    //Function for post a new menu.
    const postMenu = async () => {
        const res = await fetch(`${path}/menus`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: currentMenu.name.trim(),
                photo_name: 'test',
                local_id: store.currentUser.user.local._id
            })
        })
        const data = await res.json()
        if (data.error) {
            alert(data.error)
        } else {
            history.push('/menus')
            actions.handlePage('/menus')
        }
    }
    //Function for put an specific menu.
    const putMenu = async id => {
        const res = await fetch(`${path}/menu/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: currentMenu.name.trim(),
                local_id: store.currentUser.user.local._id
            })
        })
        const data = await res.json()
        if (data.error) {
            alert(data.error)
        } else {
            history.push('/menus')
            actions.handlePage('/menus')
        }
    }

    const handleSubmit = () => {
        id ? putMenu(id) : postMenu()
    }

    useEffect(() => {
        /* console.log(currentMenu) */
    }, [currentMenu])

    useEffect(() => {
        const getMenu = async id => {
            const res = await fetch(`${path}/menu/${id}/client`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (data.error) {

            } else {
                setCurrentMenu(data)
            }
        }
        id && getMenu(id)
    }, [id, path])

    return (
        <Page
            title={`${id ? 'Editar' : 'Crear'} Menú`}
            back='/menus'
        >
            <Form onSubmit={handleSubmit}>
                <Input
                    id='menuName'
                    label='Nombre'
                    name='name'
                    value={currentMenu.name}
                    onChange={e => setCurrentMenu({ ...currentMenu, name: e.target.value })}
                />
                <ButtonContainer>
                    <Button text={id ? 'Editar' : 'Crear'} color='primary' />
                </ButtonContainer>
            </Form>
        </Page>
    )
}

export default MenuForm;
