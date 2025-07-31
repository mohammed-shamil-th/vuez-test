import React from 'react'
import ErrorWarning from './ErrorWarning'

export default function TextBox({ label, name, value, onChange, required = false, type = "text", error = "" }) {
    return (
        <div>
            <label className="block text-sm text-gray-700 mb-2 font-light">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>
            <input
                name={name}
                type={type}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={value || ""}
                onChange={onChange}
            />
            {error && (
            <ErrorWarning error={error} />
            )}
        </div>
    )
}
