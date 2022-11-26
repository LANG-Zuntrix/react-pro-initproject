import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export * from './ProductButtons';
export * from './ProductImage'
export * from './ProductTitle';

// export * from './ProductCard';

export const ProductCard : ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;