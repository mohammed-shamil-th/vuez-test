import React from 'react'

export default function Sidebox() {
    return (
        <div className="w-full lg:w-[480px] md:w-[320px] ">
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-t-lg"
                style={{
                    backgroundImage: 'url(./image.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-2">
                        <img src="./form-brand-logos.png" alt="Logo" className='h-[50px]' />
                    </div>
                </div>

            </div>

            <div className="bg-white rounded-b-lg ">
                <div className="text-center flex items-center justify-center flex-col">
                    <div className="w-fit bg-gradient-to-r from-[#299C3F] to-[#134223] text-white px-10 py-2 rounded-b-[10px] text-m font-medium mb-4">
                        Registration Information 1
                    </div>

                    <div className="space-y-2 text-gray-400 text-sm p-4">
                        <div className='font-bold text-lg'>FULL NAME</div>
                        <div className='font-normal text-m'>JOB TITLE</div>
                        <div className='font-normal text-m'>COMPANY NAME</div>
                        <div className='font-normal text-m'>COUNTRY OF RESIDENCE</div>
                    </div>

                    <div className="mt-6 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] w-full px-8 py-4">
                        <div className="text-[#ACACAC] font-normal text-lg mb-1">BADGE CATEGORY</div>
                        <div className="text-2xl font-bold text-gray-900">VISITOR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
