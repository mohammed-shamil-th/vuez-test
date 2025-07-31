import React from 'react';

export default function PromoCodeApplied({ promoCode, handleRemovePromo }) {
    return (
        <div className="">
            <div className="bg-white rounded-lg px-4 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                            <span className="text-md font-bold text-gray-800 mr-2">Promo code applied:</span>
                            <span className="text-md font-bold text-green-600">{promoCode}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-md font-bold text-gray-800 mr-2">Discount applied:</span>
                            <span className="text-md font-bold text-green-600">15% (EUR 0.06 incl. VAT)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-md font-bold text-gray-800 mr-2">Applied to:</span>
                            <span className="text-md font-bold text-green-600">All tickets</span>
                        </div>
                    </div>

                    <button className="px-4 py-1.5 border border-[#C7000C] text-[#C7000C] text-md font-bold rounded hover:bg-red-50" onClick={handleRemovePromo}>
                        REMOVE
                    </button>
                </div>
            </div>
        </div>
    );
}