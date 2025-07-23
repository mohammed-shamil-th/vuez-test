import React from 'react'
import HeaderLayout from '../components/common/HeaderLayout'
import RegistationPage from '../app/registration'

export default function Registration() {
    return (
        <div className='min-h-screen relative'>
            <div className='overflow-y-auto h-screen' style={{ scrollbarWidth: 'none' }}>
                <HeaderLayout />
                <RegistationPage />
                <HeaderLayout />
            </div>
        </div>
    )
}
