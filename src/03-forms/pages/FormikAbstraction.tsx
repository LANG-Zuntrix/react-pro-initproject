import {  Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckBox } from '../components/';
import '../styles/styles.css';

export const FormikAbstraction = () => {


  return (
    <div>
        <h1>Formik Abstractation</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ ( values ) => {
                console.log( {values} )

            }}
            validationSchema={ Yup.object({
                    firstName:  Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName:   Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email:      Yup.string()
                                    .email('El email no tiene un un formato válido')
                                    .required('Requerido'),
                    terms:      Yup.boolean()
                                    .oneOf( [true], 'Debe de aceptar las condiciones' ),
                    jobType:    Yup.string()
                                    .required()
                                    .notOneOf( ['it-jr'], 'Esta opción no es permitida')
            })}
        >
        
            {
                (formik) => (
                    <Form>

                        <MyTextInput label="First Name" name="firstName"  placeholder="Luis"/>

                        <MyTextInput label="Last Name" name="lastName"  placeholder="Angel"/>

                        <MyTextInput label="Email" name="email"  placeholder="xxx@email.com"/>

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </MySelect>

                        <MyCheckBox label="Terms & Conditions" name="terms" />

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>



    </div>
  )
}
