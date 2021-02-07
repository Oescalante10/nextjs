import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../../store/appContext';
import Page from '../../../../components/containers/page/Page';
import Form from '../../../../components/forms/form/Form';
import Input from '../../../../components/forms/input/Input';
import Button from '../../../../components/buttons/button/Button';
import ButtonContainer from '../../../../components/buttons/buttonContainer/ButtonContainer';
import SelectTag from '../../../../components/forms/selectTag/SelectTag';
import SelectInputNumber from '../../../../components/forms/selectInputNumber/SelectInputNumber';
import Select from '../../../../components/forms/select/Select';
import Loading from '../../../../components/loading/Loading';

const ProductForm = ({ match, history }) => {

    const { id, menu_id, menu_name } = match.params
    const { store, actions } = useContext(Context);
    const { path } = store;

    const [maximumNumberAggregatesList, setMaximumNumberAggregatesList] = useState([])
    const [aggregateList, setAggregatesList] = useState([])
    const [preparationList, setPreparationList] = useState([])
    const [currentProduct, setCurrentProduct] = useState({
        name: "",
        description: "",
        price: "",
        photo_name: "",
        product_status_id: 1,
        product_type_id: 1,
        preparation_area_id: 1
    })

    //Function for post a new menu.
    const postProduct = async () => {
        const res = await fetch(`${path}/products`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: currentProduct.name.trim(),
                description: currentProduct.description.trim(),
                price: currentProduct.price,
                menu_id: menu_id,
                preparation_area_id: currentProduct.preparation_area_id,
                product_status_id: currentProduct.product_status_id,
                product_type_id: currentProduct.product_type_id,
                photo_name: currentProduct.photo_name.trim(),
                maximum_number_aggregates_list: maximumNumberAggregatesList,
                aggregate_list: aggregateList,
                preparation_list: preparationList,
                user_id: 3
            })
        })
        const data = await res.json()
        if (data.error) {
            alert(data.error)
        } else {
            history.push(`/menu/${menu_id}/${menu_name}/productos`)
            actions.handlePage(`/menu/${menu_id}/${menu_name}/productos`)
        }
    }
    //Function for put an specific menu.
    const putProduct = async id => {
        const res = await fetch(`${path}/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: currentProduct.name.trim(),
                menu_id: menu_id,
                user_id: store.currentUser.user._id
            })
        })
        const data = await res.json()
        if (data.error) {
            alert(data.error)
        } else {
            history.push(`/menu/${menu_id}/${menu_name}/productos`)
            actions.handlePage(`/menu/${menu_id}/${menu_name}/productos`)
        }
    }

    const handleSubmit = () => {
        id ? putProduct(id) : postProduct()
    }

    useEffect(() => {
        actions.getAggregates()
        actions.getPreparations()
        actions.getAggregateTypes()
        actions.getProductTypes()
        actions.getProductStatuses()
        actions.getPreparationAreas()
    }, [actions])

    useEffect(() => {
        console.log(currentProduct)
    }, [currentProduct])

    useEffect(() => {
        const getProduct = async id => {
            const res = await fetch(`${path}/product/${id}/client`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (data.error) {

            } else {
                setCurrentProduct(data)
            }
        }
        id && getProduct(id)
    }, [id, path])

    return (
        <Page
            title={`${id ? 'Editar' : 'Crear'} Producto`}
            back={`/menu/${menu_id}/${menu_name}/productos`}
        >
            <Loading>
                <Form onSubmit={handleSubmit}>
                    <Input
                        id='productName'
                        label='Nombre'
                        value={currentProduct.name}
                        onChange={e => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                    />

                    <Input
                        id='productPrice'
                        label='Precio'
                        type='number'
                        value={currentProduct.price}
                        onChange={e => setCurrentProduct({ ...currentProduct, price: parseInt(e.target.value) })}
                    />

                    <Input
                        id='productPhoto'
                        label='Imagen'
                        value={currentProduct.photo_name}
                        onChange={e => setCurrentProduct({ ...currentProduct, photo_name: e.target.value })}
                    />

                    <Input
                        id='productDescription'
                        label='Descripción'
                        value={currentProduct.description}
                        onChange={e => setCurrentProduct({ ...currentProduct, description: e.target.value })}
                    />

                    <Select
                        id='productStatusSelect'
                        label='Estado de Producto'
                        elements={store.productStatuses}
                        defaultValue={currentProduct.product_status_id}
                        identifier='product_status_id'
                        value={currentProduct}
                        setValues={setCurrentProduct}
                    />

                    <Select
                        id='productTypeSelect'
                        label='Tipo de Producto'
                        elements={store.productTypes}
                        defaultValue={currentProduct.product_type_id}
                        identifier='product_type_id'
                        value={currentProduct}
                        setValues={setCurrentProduct}
                    />

                    <Select
                        id='preparationAreaSelect'
                        label='Área de Preparación'
                        elements={store.preparationAreas}
                        defaultValue={currentProduct.preparation_area_id}
                        identifier='preparation_area_id'
                        value={currentProduct}
                        setValues={setCurrentProduct}
                    />

                    <SelectTag
                        id='productAggregateList'
                        label='Agregados'
                        elements={store.aggregates}
                        value={aggregateList}
                        setValues={setAggregatesList}
                    />

                    <SelectTag
                        id='productPreparationList'
                        label='Preparaciones'
                        elements={store.preparations}
                        value={preparationList}
                        setValues={setPreparationList}
                    />

                    <SelectInputNumber
                        id='productMaximumNumberAggregates'
                        label='Máximo N° de Agregados'
                        elements={store.aggregateTypes}
                        value={maximumNumberAggregatesList}
                        setValues={setMaximumNumberAggregatesList}
                    />

                    <ButtonContainer>
                        <Button text={id ? 'Editar' : 'Crear'} color='primary' />
                    </ButtonContainer>
                </Form>
            </Loading>
        </Page>
    )
}

export default ProductForm;
