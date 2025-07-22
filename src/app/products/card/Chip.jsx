import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Chip({ chip }) {
    return (
        <div className="flex items-center gap-[5px] bg-white/15 backdrop-blur-md rounded-full text-white border border-gray-200 border-opacity-50 pr-[10px] py-[1px]" style={{ opacity: chip?.active ? 1 : 0.3 }}>
            <CheckCircleIcon className="w-6 h-6 text-[#26FF51]" />
            <span className="font-light font-poppins text-[14.63px] leading-[100%] tracking-normal">
                {chip?.label}
            </span>
        </div>
    )
}
