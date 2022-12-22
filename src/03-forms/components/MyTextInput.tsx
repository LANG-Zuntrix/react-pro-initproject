import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any; //* Comodín para enviar cualquier prop adicional
}


export const MyTextInput = ( { label, ...props }: Props) => {

    const [ field, meta ] = useField( props )

  return (
    <>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        <input className="text-input" { ...field } { ...props } />
        <ErrorMessage name={ props.name } component="span" />

        {/* //? Tener en cuenta los datos de la variable meta */}
        {/* {
            meta.touched && meta.error && (
                <span className="error" >{ meta.error }</span>
            )
        } */}
    </>
  )
}
