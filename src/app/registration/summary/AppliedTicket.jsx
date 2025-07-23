import React from 'react';

export default function AppliedTicket() {
    return (
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg">
            <div className="flex items-start justify-between px-2 py-3">
                {/* Left side - Ticket info */}
                <div>
                    <span className="text-[0.8rem] font-bold text-gray-800 tracking-wide">
                        PREMIUM TICKET X 2
                    </span>

                </div>

                {/* Right side - Pricing */}
                <div className="flex flex-col items-start justify-start space-y-2 text-sm">

                    <div className="text-gray-400 line-through">FREE 0.16</div>

                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-green-600">FREE 0.16</span>
                        <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                            -15%
                        </span>
                        <span className="text-gray-500">INCL. 19% VAT</span>
                    </div>

                    {/* Tax info */}
                </div>
            </div>
        </div>
    );
}