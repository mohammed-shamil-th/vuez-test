import React from 'react'
import ProductCard from './ProductCard'
import { tickets } from '../datas/tickets'

export default function ProductCards() {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {tickets?.map((product, index) => (
        <ProductCard key={product?.id} product={product} index={index} />
      ))}


    </div>
  )
}
