import React from 'react'
import FormButton from '../../../components/common/FormButton'

export default function PopupFooter({ handleCancel, handleApply }) {
    return (
        <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
            <button
                onClick={handleCancel}
                className="px-6 py-2 border border-black text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
                CANCEL
            </button>
            <FormButton label="APPLY" onClick={handleApply} />

        </div>
    )
}
