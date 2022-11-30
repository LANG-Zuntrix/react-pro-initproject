import { useState, useEffect } from 'react';
import { Interface } from 'readline';
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs ) => {

    const [counter, setCounter] = useState( value );

    const increaseBy = ( value: number ) => {

      const newValue = Math.max( counter + value, 0 );

      setCounter( newValue );
      onChange && onChange({ count: newValue, product }); //Si existe, se ejecuta
    }

    useEffect(() => {
      
      setCounter( value );

    }, [ value ])
    

    return {
        //* Parameters
        counter,

        //* Methods
        increaseBy,
    }
}