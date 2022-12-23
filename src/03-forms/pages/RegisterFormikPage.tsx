import { FormEvent } from 'react';
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import "../styles/styles.css";
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {


  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }}
            onSubmit={ ( values ) => {
                console.log( {values} )
            }}
            validationSchema={ Yup.object({
                name:       Yup.string()
                                .min( 2, 'Debe de tener 3 caracteres o más')
                                .max( 15, 'Debe de tener 15 caracteres o menos' )
                                .required( 'Requerido' ),
                email:      Yup.string()
                                .email('El email no tiene un un formato válido')
                                .required( 'Requerido' ),
                password1:  Yup.string()
                                .min( 6, 'Mímino 6 letras')
                                .required( 'Requerido' ),
                password2:  Yup.string()
                                .required( 'Requerido' )
                                .oneOf( [ Yup.ref('password1') ], 'Las contraseñas non son iguales')
        })}
        >

            {
                ( formik ) => (
                    <Form>

                        <MyTextInput label={'Nombre'} name={'name'} placeholder="Luis" />

                        <MyTextInput label={'Email'} name={'email'} placeholder="luis@google.com" type="email" />

                        <MyTextInput label={'Password'} name={'password1'} placeholder="******" type='password' />

                        <MyTextInput label={'Confirme Password'} name={'password2'} placeholder="******" type="password" />

                        <button type="submit">Create</button>
                        <button type="button" onClick={ formik.handleReset }>Reset form</button>

                    </Form>
                )
            }

        </Formik>

    </div>
  )
}
