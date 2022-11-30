import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';
import { useState } from 'react';
import { UseShoppingCart } from "../hooks/useShoppingCart";
import { products } from '../data/products';





export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = UseShoppingCart()


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
              value= { shoppingCart[product.id]?.count || 0 }
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
              onChange={ onProductCountChange }
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
