import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

export default function ProgressBar({ currentStep, totalSteps }) {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

    const getStepStatus = (step) => {
        if (step < currentStep) return 'completed'
        if (step === currentStep) return 'current'
        return 'upcoming'
    }

    return (
        <div className="w-full bg-green-50 py-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between relative overflow-x-auto no-scrollbar">
                    {steps.map((step, index) => (
                        <React.Fragment key={step}>
                            {/* Step Circle */}
                            <div className="flex flex-col items-center relative z-10 flex-shrink-0">
                                {getStepStatus(step) === 'completed' ? (
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center">
                                        <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                ) : (
                                    <div
                                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${getStepStatus(step) === 'current'
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-300 text-gray-600'
                                            }`}
                                    >
                                        <span className="text-xs sm:text-sm font-medium">{step}</span>
                                    </div>
                                )}
                            </div>

                            {/* Connector Line */}
                            {index !== steps.length - 1 && (
                                <div className="flex-1 px-2 sm:px-4 min-w-[40px]">
                                    {getStepStatus(step) === 'completed' ? (
                                        <div className="h-1 bg-green-600 rounded-full w-full"></div>
                                    ) : getStepStatus(step) === 'current' ? (
                                        <div className="flex h-1 w-full rounded-full overflow-hidden">
                                            <div className="w-1/2 bg-green-600"></div>
                                            <div className="w-1/2 bg-gray-300"></div>
                                        </div>
                                    ) : (
                                        <div className="h-1 bg-gray-300 rounded-full w-full"></div>
                                    )}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}
