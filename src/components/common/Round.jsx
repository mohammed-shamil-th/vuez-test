import React from 'react'

export default function Round({ position = "left" }) {
    return (
        <div className={`w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center absolute ${position === "right" ? "right-[-30px]" : "left-[-30px]"} top-1/2 -translate-y-1/2`}>
        </div>
    )
}
