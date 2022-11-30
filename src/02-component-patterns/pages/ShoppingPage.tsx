import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';
import { useState } from 'react';

const product1 = {
  id: '1',
  title: 'Coffee Mug - card',
  img: './coffee-mug.png'
}
const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [ product1, product2 ];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})

  const onProductCountChange = ({ count, product }: {count: number, product: Product }) => {
    // console.log( count, product );
    
    setShoppingCart( oldShoppingCart => {
      
      if( count === 0 ) {

        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        console.log({ toDelete })
        return rest;
      }

      return {
        ...oldShoppingCart,
        [ product.id ]: { ...product, count }
      }
    })
    
  }


  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>


        {
          products.map( product => (
            <ProductCard
              className="bg-dark text-white"
              product={ product } 
              key={ product.id }
              onChange={ onProductCountChange }
            >
              <ProductImage className="custom-image" 
                isActive="false"
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                }}
              />
              <ProductTitle className=" text-bold" />
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
            
          ))
        }
      </div>



      <div className="shopping-cart">

        {
          Object.entries( shoppingCart ).map( ( [key, product] ) => (
            <ProductCard
              key={ key }
              className="bg-dark text-white"
              product={ product } 
              style={{ width: '100px' }}
              // onChange={ () => onProductCountChange() }
              value={ product.count }
            >
              <ProductImage className="custom-image" 
                isActive="false"
                style={{
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
                }}
              />
              <ProductButtons className="custom-buttons"
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </ProductCard>
            
          ))
        }


      </div>


    </div>
  )
}
