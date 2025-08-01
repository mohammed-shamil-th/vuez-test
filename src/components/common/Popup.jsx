import React from 'react'
import PopupHeader from '../../app/registration/popups/PopupHeader'
import { formatToOneDecimal } from '../../app/helper-functions/helper'
import FormButton from './FormButton'

export default function Popup({ handleCancel, tickets }) {
    return (
        <div className="font-poppins fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full min-h-[50%] max-h-[85vh] flex flex-col overflow-hidden">

                {/* Header */}
                <PopupHeader handleCancel={handleCancel} title="Your Tickets Summary" />

                {/* Body */}
                <div className="p-6 flex-1 overflow-y-auto custom-scroll">
                    {tickets?.length > 0 ? (
                        <div className="divide-y divide-gray-200">
                            {tickets.map((ticket) => (
                                <div
                                    key={ticket?.id}
                                    className="flex justify-between items-center py-4 hover:bg-gray-50 transition rounded-lg px-3"
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {ticket?.title}
                                            {ticket?.count > 1 && (
                                                <span className="text-sm text-gray-500 ml-2">
                                                    x{ticket?.count}
                                                </span>
                                            )}
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-green-600">
                                            EUR {formatToOneDecimal(ticket?.discountPrice * ticket?.count)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                            No tickets selected yet.
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
                    <FormButton label="CLOSE" onClick={handleCancel} />
                </div>
            </div>
        </div>
    )
}
