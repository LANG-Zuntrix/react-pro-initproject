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
        
            {
                (formik) => (
                    <Form>
                        <label htmlFor="firstName">Firs Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" component="span" />

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>



    </div>
  )
}
