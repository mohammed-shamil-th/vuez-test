import React from 'react'

export default function ProductCardFooter({ index = 0 }) {
    return (
        <div className="h-20 text-white py-4">
            <div className="w-full h-px bg-gradient-to-r from-white/90 to-transparent"></div>

            {index === 0 ? <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                    <span className="font-bold text-[15.7px] leading-none">USD</span>
                    <span className="font-bold text-[15.7px] leading-none line-through text-gray-500">43</span>
                    <div className=" px-1 rounded font-bold text-[15.7px]  border-t" style={{ borderColor: '#BDBDBD', borderWidth: '0.5px' }}>
                        32.5
                    </div>
                    <span className="text-white text-sm">Incl. 20% VAT</span>
                </div>

                <div className="flex items-center border border-white/30 rounded">
                    <button className="w-8 h-8 flex items-center justify-center text-white border-r border-white/30 hover:bg-white/10">
                        -
                    </button>
                    <div className="w-10 h-8 flex items-center justify-center bg-white text-black font-bold">
                        25
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center text-white border-l border-white/30 hover:bg-white/10">
                        +
                    </button>
                </div>
            </div> : <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none">FREE</span>
                    <span className="text-gray-400 text-xs mt-1">INCL. 19% VAT</span>
                </div>

                <button className="bg-white text-black font-bold px-6 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    BUY NOW
                </button>
            </div>}
        </div>
    )
}
