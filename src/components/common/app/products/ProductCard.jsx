import React from 'react'
import ProductCardHeader from './card/ProductCardHeader'

export default function ProductCard({ title }) {
    return (
        <div className='product-card'><ProductCardHeader title={title} /></div>
    )
}
