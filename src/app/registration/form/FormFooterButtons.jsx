import React from 'react'
import FormButton from '../../../components/common/FormButton'

export default function FormFooterButtons({ step, handlePrev, handleNext }) {
    return (
        <div className="flex justify-center gap-2 mt-6">
            {step > 1 && <FormButton label="PREVIOUS" gradiant='bg-gradient-to-r from-[#5C2F66] to-[#25102C]' onClick={handlePrev} />}
            <FormButton label="NEXT" onClick={handleNext} type='submit' />
        </div>
    )
}
