import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBooking } from '../../context/BookingContext';

export default function ProductFooter() {
    const navigate = useNavigate();
    const { getTotal } = useBooking();
    const total = getTotal();
    return (
        <div className="h-[120px] bg-gradient-to-r from-[#299D3F] to-[#123F22] flex items-center justify-end gap-20 px-4 sm:px-8 lg:px-20">
            <div className="text-white">
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm sm:text-lg font-medium">Total:</span>
                    <span className="text-xl sm:text-3xl font-bold">EUR {total}</span>
                    <span className="text-xs sm:text-sm opacity-80">Incl. 19% VAT</span>
                </div>
                <div className="text-xs sm:text-sm opacity-80">
                    View Ticket summary
                </div>
            </div>

            <div>
                <button
                    className="bg-white text-gray-800 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg 
                 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                    onClick={() => navigate('/registration')}
                >
                    Buy Now
                </button>
            </div>
        </div>


    )
}