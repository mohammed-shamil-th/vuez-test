import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormButton from '../../components/common/FormButton';
import FormComponent from './form/FormComponent';
import RegistrationSummary from './summary/RegistrationSummary';

export default function RegistationPage() {
  const [step, setStep] = useState(4);

  const handleNext = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      // Handle form submission or final step logic here
      console.log('Form submitted');
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 font-alexandria">
      <div className="max-w-[1600px] mx-auto">

        <ProgressBar currentStep={step} />
        {step === 1 && <FormComponent />}
        {step === 2 && <FormComponent />}
        {step === 3 && <FormComponent />}
        {step === 4 && <RegistrationSummary />}
        <div className="flex justify-center gap-2 mt-6">
          {step > 1 && <FormButton label="PREVIOUS" gradiant='bg-gradient-to-r from-[#5C2F66] to-[#25102C]' onClick={handlePrev} />}
          <FormButton label="NEXT" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}