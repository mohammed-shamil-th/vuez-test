import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

export default function ProgressBar({ currentStep }) {
    const totalSteps = 4 // You can change this to support more steps
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

    const getStepStatus = (step) => {
        if (step < currentStep) return 'completed'
        if (step === currentStep) return 'current'
        return 'upcoming'
    }

    return (
        <div className="w-full bg-green-50 py-6">
            <div className="max-w-2xl mx-auto px-8">
                <div className="flex items-center justify-between relative">
                    {steps.map((step, index) => (
                        <React.Fragment key={step}>
                            {/* Step Circle */}
                            <div className="flex flex-col items-center relative z-10">
                                {getStepStatus(step) === 'completed' ? (
                                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                        <CheckIcon className="w-4 h-4 text-white" />
                                    </div>
                                ) : (
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center ${getStepStatus(step) === 'current'
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-300 text-gray-600'
                                            }`}
                                    >
                                        <span className="text-sm font-medium">{step}</span>
                                    </div>
                                )}
                            </div>

                            {/* Connector Line */}
                            {index !== steps.length - 1 && (
                                <div className="flex-1 px-4">
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
