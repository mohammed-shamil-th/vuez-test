import React from 'react'

export default function CardBadge({badge}) {
    return (
        <div className="absolute w-32 h-32 top-0 z-10 rounded-3xl">
            <div
                className="absolute -top-1 -left-1 w-full h-full text-white text-xs font-bold tracking-wider rounded-tl-3xl"
                style={{
                    background: 'linear-gradient(138.24deg, #16F25C 5.66%, #04270F 49.06%)',
                    boxShadow: '2px 2px 3px 0px rgba(0, 0, 0, 0.5)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    borderTopLeftRadius: '1.5rem'
                }}
            >
                <span
                    className="absolute whitespace-nowrap text-[1.1rem] font-bold -rotate-45"
                    style={{
                        top: '30%',
                        left: '40%',
                        transform: 'translateX(-50%) rotate(-45deg)',
                    }}
                >
                    {badge}
                </span>
            </div>
        </div>
    )
}
