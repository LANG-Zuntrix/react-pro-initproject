import { Formik, Form } from "formik";
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

const initialValues: { [x: string] : any } = {};

const requiredFields: { [key: string] : any } = {};


for ( const input of formJson ) {
    initialValues[ input.name ] = input.value;

    if ( !input.validaions?.length ) continue;

    let schema = Yup.string();

    for (const rule of input.validaions) {
        if ( rule.type === 'required' ) {
            schema = schema.required( rule.desc );
        }

        if ( rule.type === 'minLength'){
            schema = schema.min( (rule as any).value || 2, `${ rule.desc } ${ (rule as any).value || 2 }`);
        }

        if ( rule.type === 'email'){
            schema = schema.email( rule.desc );
        }
        // TODO Otras reglas
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    
    console.log(initialValues)

  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ (values) => {
                console.log( values )
            }}
        >

            { (formik) => (
                <Form noValidate>
                    { formJson.map( ({ type, name, placeholder, label, options }) => {

                        if ( type === 'input' || type === 'password' || type === 'email' ) {

                            return <MyTextInput
                                        key={ name }
                                        type={ (type as any) }
                                        name={ name }
                                        label={ label }
                                        placeholder={ placeholder } />
                        } else if ( type === 'select' ) {
                            return (
                                <MySelect key= { name } label={ label } name={ name }                                >
                                    <option value="">Select an Option</option>
                                    {
                                        options?.map( opt => (
                                            <option key={ opt.id } value={ opt.id } >{ opt.label }</option>
                                        ))
                                    }
                                </MySelect>
                            )
                        }

                        throw new Error (`El type: ${ type }, no es soportado`);
                    })}
                    <button type="submit" >Submit</button>
                </Form>
            )}

        </Formik>


    </div>
  )
}
