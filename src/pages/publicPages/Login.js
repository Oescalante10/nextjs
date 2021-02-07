import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import AccessForm from '../../components/forms/accessForm/AccessForm';
import AccessInput from '../../components/forms/accessInput/AccessInput';
import Button from '../../components/buttons/button/Button';
import ButtonContainer from '../../components/buttons/buttonContainer/ButtonContainer';

const Login = ({history}) => {

    const { actions } = useContext(Context)

    return (
        <AccessForm onSubmit={()=>actions.postLogin(history)} title='Ingreso'>

            <AccessInput 
                id='userLogin'
                label='Email'
                name='email'
                onChange={actions.handleChange}
            />
            <AccessInput
                id='userPassword'
                label='Contraseña'
                type='password'
                name='password'
                onChange={actions.handleChange}
            />

            <ButtonContainer>
                <Button text='Ingresar' color='primary' />
            </ButtonContainer>

        </AccessForm>
    )
}

export default Login;
