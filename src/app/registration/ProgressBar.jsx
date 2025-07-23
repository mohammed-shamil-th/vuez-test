import React from 'react'

export default function ProgressBar() {
    return (
        <div className="flex items-center justify-center mb-8 space-x-8">
            <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                </div>
                <div className="w-16 h-1 bg-green-600 ml-2"></div>
            </div>
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                2
            </div>
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                3
            </div>
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                4
            </div>
        </div>
    )
}
