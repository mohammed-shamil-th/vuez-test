import React from 'react'

export default function TextBox({ label, name, value, handleInputChange, required = false ,type = "text"}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>
            <input
                name={name}
                type={type}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={value || ""}
                onChange={(e) => handleInputChange(`${name}`, e.target.value)}
            />
        </div>
    )
}
