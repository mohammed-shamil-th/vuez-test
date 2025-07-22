import React from 'react'

export default function ProductCardContent() {
    return (
        <div className="h-full backdrop-blur-[5.89534330368042px] bg-[rgba(0,0,0,0.70)] flex-1 flex flex-col justify-between px-8 py-4">
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
            <div className='h-20 text-white '>
                <div
                    style={{
                        border: "0.74px solid",
                        borderImageSource:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.0184) 100%)",
                        borderImageSlice: 1,
                    }}
                >
                </div>
                <h6>USD</h6>
            </div>
        </div>
    )
}
