import React from 'react'
import ProductCardFooter from './ProductCardFooter'

export default function ProductCardContent({ index }) {
    return (
        <div className="h-full backdrop-blur-[5.89534330368042px] bg-[rgba(0,0,0,0.80)] flex-1 flex flex-col justify-between px-8 py-4">
            <div className='flex flex-col justify-center gap-4 px-2 py-6'>
                <div className="text-[1rem] leading-[1.5] tracking-[0] text-white">
                    Visitor Passes provide{" "}
                    <span className="font-semibold text-[1rem] leading-[1.5] tracking-[0] text-[#26FF51]">
                        3 days access
                    </span>{" "}
                    to GITEX NIGERIA exhibition and all free conference
                </div>
                <img
                    src="./cards/brands/gitex.png"
                    alt="brand"
                    className="w-[170px]"
                />
            </div>
            <ProductCardFooter index={index} />
        </div>
    )
}
