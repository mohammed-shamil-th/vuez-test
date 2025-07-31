import React from 'react'

export default function FormButton({ label, onClick, gradiant = "", type = "button" }) {
    return (
        <button
            className={`font-archivo text-white font-bold px-8 py-2 rounded hover:opacity-90 transition-colors ${gradiant ? gradiant : "bg-gradient-to-r from-[#27963D] to-[#134323]"}`}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}
