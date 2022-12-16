import { Field, Form, ErrorMessage, Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';

export const FormikComponents = () => {


  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={ ( values ) => {
                console.log( values )

            }}
            validationSchema={ Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('El email no tiene un un formato válido')
                                    .required('Requerido'),
            })}
        >
            <Form>
                <label htmlFor="firstName">Firs Name</label>
                <input type="text" { ...getFieldProps('firstName') } />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" { ...getFieldProps('lastName') } />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email Address</label>
                <input type="email" { ...getFieldProps('email') } />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type='submit'>Submit</button>
            </Form>
        </Formik>



    </div>
  )
}
