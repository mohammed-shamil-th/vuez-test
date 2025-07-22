import React from 'react'
import ProductCard from './ProductCard'

export default function ProductCards() {
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
        <ProductCard title="Visitor 3 Day Access Ticket"/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    
    </div>
  )
}
