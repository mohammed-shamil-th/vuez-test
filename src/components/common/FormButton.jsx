import React from 'react'

export default function FormButton({ label, onClick }) {
    return (
        <button
            className="text-white px-8 py-2 rounded font-medium hover:opacity-90 transition-colors bg-gradient-to-r from-[#27963D] to-[#134323]"
        >
            {label}
        </button>
    )
}
