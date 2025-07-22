import React from 'react'
import ProductCardContent from './card/ProductCardContent'
import ProductCardHeader from './card/ProductCardHeader'
import Round from '../../components/common/Round'

export default function ProductCard({ title }) {
    return (
        <div
            className="product-card rounded-3xl overflow-hidden relative flex flex-col "
            style={{
                backgroundImage: 'url("./cards/cardbg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <ProductCardHeader title={title} />
            <ProductCardContent />
            <Round position='left' />
            <Round position='right' />
            
        </div>
    )
}
