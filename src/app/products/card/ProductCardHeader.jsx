import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function ProductCardHeader({ title }) {
    return (
        <div className="product-card-header uppercase flex flex-col gap-2 px-8 py-6">
            <h4 className="font-semibold text-[1.5rem] leading-[1] tracking-normal" style={{ color: ' #FFFFFF' }}>
                {title}
            </h4>
            <h5
                className="font-semibold text-[1.1rem] leading-[1] tracking-normal flex items-center gap-2"
                style={{ color: '#E6FF00' }}
            >
                VIEW DETAILS <ArrowLongRightIcon className="size-4" style={{ color: '#E6FF00' }} />
            </h5>
        </div>
    )
}
