import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function PopupHeader({handleCancel}) {
    return (
        <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-4 relative"
            style={{
                backgroundImage: 'url(./image.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'left',
            }}>
            <h2 className="text-white text-2xl font-bold">SELECT SOLUTIONS/PRODUCTS</h2>
            <button
                onClick={handleCancel}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border-2 border-white"
            >
                <XMarkIcon className="h-4 w-4 text-white" />
            </button>
        </div>
    )
}
