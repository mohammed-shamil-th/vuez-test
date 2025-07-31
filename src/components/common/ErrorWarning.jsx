import React from 'react'

export default function ErrorWarning({ error }) {
    return (
        <p className="text-red-500 text-xs mt-1">{error}</p>
    )
}
