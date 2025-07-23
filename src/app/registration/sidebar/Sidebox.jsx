import React from 'react'

export default function Sidebox() {
    return (
        <div className="w-80">
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-t-lg">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-2">
                        <span className="text-xs">GITEX</span>
                        <span className="text-xs">🏔️</span>
                        <span className="text-xs">🌐</span>
                        <span className="text-xs">📱</span>
                        <span className="text-xs">🏢</span>
                    </div>
                </div>
                <div className="text-right text-xs mb-1">GLOBAL</div>
                <div className="text-right text-xs">14-18 OCT 2024 DUBAI WORLD TRADE CENTRE</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-b-lg p-4">
                <div className="text-center">
                    <div className="bg-green-700 text-white px-3 py-1 rounded text-xs font-medium mb-4">
                        Registration Information 1
                    </div>

                    <div className="space-y-2 text-gray-400 text-sm">
                        <div>FULL NAME</div>
                        <div>JOB TITLE</div>
                        <div>COMPANY NAME</div>
                        <div>COUNTRY OF RESIDENCE</div>
                    </div>

                    <div className="mt-6">
                        <div className="text-gray-500 text-xs mb-1">BADGE CATEGORY</div>
                        <div className="text-2xl font-bold text-gray-900">VISITOR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
