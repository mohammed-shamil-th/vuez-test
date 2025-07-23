import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function SelectBox({ label, required = false }) {
    return (
        <div>
            <label className="block text-sm text-gray-700 mb-2 font-light">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>
            <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white text-gray-400">
                    <option value="">Please Select</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
        </div>
    )
}
