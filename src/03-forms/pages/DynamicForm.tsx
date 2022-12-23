import { Formik, Form } from "formik";
import formJson from '../data/custom-form.json';
import { MyTextInput } from "../components";

const initialValues: { [x: string] : any } = {};

for ( const input of formJson ) {
    initialValues[ input.name ] = input.value;
}


export const DynamicForm = () => {
    
    console.log(initialValues)

  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={ initialValues }
            onSubmit={ (values) => {
                console.log( values )
            }}
        >

            { (formik) => (
                <Form noValidate>
                    { formJson.map( ({ type, name, placeholder, label }) => {
                        return <MyTextInput
                                    key={ name }
                                    type={ (type as any) }
                                    name={ name }
                                    label={ label }
                                    placeholder={ placeholder } />
                    })}
                    <button type="submit" >Submit</button>
                </Form>
            )}

        </Formik>


    </div>
  )
}
