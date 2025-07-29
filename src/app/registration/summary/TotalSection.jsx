import React from 'react'
import FormButton from '../../../components/common/FormButton'

export default function TotalSection({ promocodeCodeApplied }) {
    return (
        <>{promocodeCodeApplied ? <div className="flex flex-wrap items-center justify-between mt-8">
            <div className="flex items-center space-x-2 mr-4 mb-3 md:mb-8">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-lg text-gray-400 line-through">EUR 300</span>
                <span className="text-lg font-bold text-gray-900">EUR 150</span>
                <span className="text-sm text-gray-600">Incl. 19% VAT</span>
            </div>

            <div className="flex items-center space-x-3 mb-4">
                <button
                    className="px-6 py-2 border border-black text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-bold"
                >
                    BACK
                </button>
                <FormButton label="NEXT" />
            </div>
        </div> :
            <div className="flex justify-end mb-8">
                <div className="flex items-center gap-2 text-right">
                    <div className="text-2xl font-bold text-gray-900">Total: EUR 300</div>
                    <div className="text-sm text-gray-600">Incl. 19% VAT</div>
                </div>
            </div>}
        </>
    )
}
