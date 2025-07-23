import React from 'react';
import HeaderLayout from '../components/common/HeaderLayout';
import { useNavigate } from 'react-router-dom';
import FormButton from '../components/common/FormButton';

export default function SuccessPage() {
    const navigate = useNavigate();
    return (
        <div className='h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100'>
            <HeaderLayout />
            <div className='flex-1 overflow-y-auto' style={{ scrollbarWidth: 'none' }}>
                <div className="min-h-full font-alexandria flex items-center justify-center px-4 py-8">
                    <div className="max-w-3xl w-full">
                        <div className="bg-green-600 h-3 rounded-t-2xl"></div>
                        <div className="bg-white rounded-b-2xl px-6 py-12 text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                THANK YOU!
                            </h1>

                            <p className="text-xl text-gray-700 mb-4 font-medium tracking-wide">
                                Your Registration Has Been Submitted Successfully
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto tracking-wide">
                                A Confirmation Email With Your Event Details Will Be Sent To<br />
                                You Shortly. Please Check Your Inbox (And Spam Folder).
                            </p>
                            <FormButton label="Return To Homepage" onClick={() => navigate('/')} />
                        </div>
                    </div>
                </div>
            </div>
            <HeaderLayout />

        </div>
    );
}