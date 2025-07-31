import React from 'react'
import ProductCardContent from './card/ProductCardContent'
import ProductCardHeader from './card/ProductCardHeader'
import Round from '../../components/common/Round'
import CardBadge from './card/CardBadge'

export default function ProductCard({ product, index }) {
    return (
        <div className='relative'>
            {product?.badge && <CardBadge badge={product?.badge} />}
            <div
                className="product-card rounded-3xl overflow-hidden relative"
                style={{
                    backgroundImage: `${product?.bgImg}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <ProductCardHeader product={product} />
                <div className="flex-1 overflow-y-auto">
                    <ProductCardContent index={index} product={product} />
                </div>
                <Round position='left' />
                <Round position='right' />

            </div>
        </div>
    )
}
