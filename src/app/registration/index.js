import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormButton from '../../components/common/FormButton';
import FormComponent from './form/FormComponent';
import RegistrationSummary from './summary/RegistrationSummary';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import FormFooterButtons from './form/FormFooterButtons';

export default function RegistationPage() {
  const [step, setStep] = useState(1);
  const { state } = useBooking()
  const tickets = state?.tickets || [];
  const attendees = tickets.flatMap(ticket =>
    ticket.attendees.map(att => ({ ...att, ticketId: ticket.id }))
  );
  const totalSteps = attendees.length + 1;

  const navigagte = useNavigate();

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    } else {
      navigagte('/success');
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
        <ProgressBar currentStep={step} totalSteps={totalSteps} />
        {step <= attendees.length ? (
          <FormComponent attendee={attendees[step - 1]} step={step} handleNext={handleNext} handlePrev={handlePrev} />
        ) : (
          <RegistrationSummary tickets={tickets} handlePrev={handlePrev} step={step} />
        )}
      </div>
    </div>
  );
}