import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    [x: string]: any; //* Comodín para enviar cualquier prop adicional
}


export const MyCheckBox = ( { label, ...props }: Props) => {

    const [ field ] = useField( { ...props, type: 'checkbox' } )

  return (
    <>
        <label>
            <input type="checkbox" { ...field } { ...props } />
            { label }
            
        </label>
        <ErrorMessage name={ props.name } component="span" />
    </>
  )
}
