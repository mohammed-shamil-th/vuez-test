import React from 'react'
import HeaderLayout from '../components/common/HeaderLayout'
import ProductSection from '../app/products/ProductsSection'
import ProductFooter from '../app/products/ProductFooter'

export default function Home() {
    return (
        <div className='min-h-screen relative'>
            <div className='overflow-y-auto h-screen pb-[120px]' style={{ scrollbarWidth: 'none' }}>
                <HeaderLayout />
                <ProductSection />
                <HeaderLayout />
            </div>

            <div className='fixed bottom-0 left-0 right-0 z-10'>
                <ProductFooter />
            </div>
        </div>
    )
}
