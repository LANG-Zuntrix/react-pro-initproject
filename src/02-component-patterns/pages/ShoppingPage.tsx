import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard className="bg-dark text-white" product={ product } >
          <ProductCard.Image className="custom-image" isActive="true"/>
          <ProductCard.Title title={'Hola prrs'} className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          className="bg-dark text-white"
          product={ product } 
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

        <ProductCard
          product={ product }
          style={{
            backgroundColor: 'yellow'
          }} 
        >
          <ProductImage style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
          }}/>
          <ProductTitle style={{
            fontWeight: 'bold'
          }}/>
          <ProductButtons 
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard>

      </div>
    </div>
  )
}
