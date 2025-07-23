import React from 'react'

export default function FormHeader({ title = "Registration Information 1", subtitle = "PREMIUM TICKET - FREE incl. 19% VAT" ,style={}}) {
    return (
        <div className="bg-[linear-gradient(90deg,_#299D3F_0%,_#123F22_100%)] text-white px-6 py-6" style={style}>
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">{title}</h2>
                {subtitle && <span className="text-sm bg-white/15 backdrop-blur-md px-3 py-1 rounded border border-gray-200 border-opacity-50">
                    PREMIUM TICKET - FREE incl. 19% VAT
                </span>}
            </div>
        </div>
    )
}
