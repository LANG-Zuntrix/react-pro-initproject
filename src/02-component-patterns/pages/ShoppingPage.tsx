import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import '../styles/custom-styles.css';

import { products } from '../data/products';

const product = products[0];



export const ShoppingPage = () => {


  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        key={ product.id }
        product={ product } 
        className="bg-dark text-white"
        initialValues= {{
          count: 0,
          maxCount: 10
        }}
      >
        {
          ( { reset, count, increaseBy, maxCount, isMaxCountReached } ) => (
            <>
              <ProductImage className="custom-image" 
                isActive="false"
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                }}
              />
              <ProductTitle className=" text-bold" />
              <ProductButtons className="custom-buttons"/>

              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy(-2) }>-2</button>

              {
                ( !isMaxCountReached && <button onClick={ () => increaseBy(2) }>+2</button> )
              }

              {/* <button 
                onClick={ () => increaseBy(2) }
                style= {{ display: ( maxCount === count ) ? 'none' : 'inline-block' }}
              >+2</button> */}

              <span>{ count } - { maxCount }</span>
  
            </>
          )
        }
      </ProductCard>

    </div>
  )
}
