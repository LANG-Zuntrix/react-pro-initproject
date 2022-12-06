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
          count: 1,
          maxCount: 15
        }}
      >
        {
          ( msg ) => (
            <>
              <ProductImage className="custom-image" 
                isActive="false"
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                }}
              />
              <ProductTitle className=" text-bold" />
              <ProductButtons className="custom-buttons"/>
              <h1>{ msg }</h1>
            </>
          )
        }
      </ProductCard>

    </div>
  )
}
