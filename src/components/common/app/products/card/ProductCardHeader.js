import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ProductCardHeader({ title }) {
    return (
        <div className='product-card-header'><h3>{title}</h3>
            <h4>VIEW DETAILS <ArrowRightIcon /></h4>
        </div>
    )
}
