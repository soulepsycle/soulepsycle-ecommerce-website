import React from 'react'
import Heading from '@/components/heading';

const ProductPage = ({params} : {
    params: {
        categoryName: string;
        productName: string;
        productVariantColor: string;
        productVariantSize: string;
    }
}) => {
    const paramsCategoryName = params.categoryName;
    const paramsProductName = params.productName;
    const paramsProductVariantColor = params.productVariantColor;
    const paramsProductVariantSize = params.productVariantSize

  return (
    <main className='container mx-auto'>
        <Heading title={paramsProductName} subtitle={`Category: ${paramsCategoryName} | Color: ${paramsProductVariantColor} | Size: ${paramsProductVariantSize}`}/>
    </main>
  )
}

export default ProductPage