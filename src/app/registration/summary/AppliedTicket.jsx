import React from 'react';
import { formatToOneDecimal } from '../../helper-functions/helper';

export default function AppliedTicket({ ticket, getPercentageValue, defaultPercentage }) {
    const discountedAmount = getPercentageValue(ticket?.discountPrice * ticket?.count);
    const finalPrice = formatToOneDecimal(ticket?.discountPrice * ticket?.count - discountedAmount);
    return (
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg">
            <div className="flex items-start justify-between px-2 py-3">
                <div>
                    <span className="text-[0.8rem] font-bold text-gray-800 tracking-wide">
                        {ticket?.title}{ticket?.count > 1 ? " X " + ticket?.count : null}
                    </span>
                </div>
                <div className="flex flex-col items-start justify-start space-y-2 text-sm">

                    <div>
                        <span className="text-gray-700 mr-2 text-md font-semibold">EUR {finalPrice}</span>
                        <span className="text-gray-400 line-through">{formatToOneDecimal(ticket?.discountPrice * ticket?.count)}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-green-600">FREE {formatToOneDecimal(discountedAmount)}</span>
                        <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                            -{defaultPercentage}%
                        </span>
                        <span className="text-gray-500">INCL. 19% VAT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}