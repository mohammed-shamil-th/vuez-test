import React from 'react'
import Chip from './Chip'

export default function CardChips({ product }) {
    return (
        <div className="flex flex-wrap gap-2.5">
            {product?.chips?.map((chip, index) => (
                <Chip key={index} chip={chip} />
            ))}
        </div>
    )
}
