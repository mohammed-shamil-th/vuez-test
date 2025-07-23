import React from 'react';
import ProductCards from './ProductCards';

export default function ProductSection() {
    return (
        <>
            <div className="flex-1 bg-white max-w-[1600px] mx-auto">
                <div>
                    <ProductCards />
                </div>
            </div>
        </>
    )
}