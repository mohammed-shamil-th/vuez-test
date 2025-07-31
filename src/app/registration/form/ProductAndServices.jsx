import React, { useState } from 'react'
import SolutionsProductsPopup from '../popups/SolutionsProductsPopup';
import CategoriesComponent from './Categories';

export default function ProductAndServices({ handleWorkshopChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isApplied, setIsApplied] = useState(false);

    return (
        <div className="border-t pt-6">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    What products & services are you interested in? <span className="text-red-500">*</span>
                </label>
                <button type='button' className="bg-gradient-to-r from-[#AB0202] to-[#240102] text-white px-4 py-1 rounded text-sm font-medium" onClick={() => setIsOpen(!isOpen)}>
                    SELECT <span className='font-bold'>SOLUTIONS/PRODUCTS</span>
                </button>
            </div>
            {isApplied && <CategoriesComponent />}
            <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Select Workshop <span className="text-gray-500">(Maximum 6 can Select)</span>
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        {[
                            'Global Leaders Forum !NEW (3 Days)',
                            'GITEX Main Stage',
                            'Artificial Intelligence & Robotics (15)',
                            'Future Health !NEW (2 Days)',
                            'Cybersecurity (4 Days)',
                            'Future Health !NEW (2 Days)'
                        ].map((workshop, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    onChange={(e) => handleWorkshopChange(workshop, e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-700">{workshop}</span>
                            </label>
                        ))}
                    </div>

                    <div className="space-y-3">
                        {[
                            'Digital Cities (1 Day)',
                            'Edtech (1 Day)',
                            'Energy Transition (1 Day)',
                            'Intelligent Connectivity (1 Day)',
                            'Digital Finance (1 Day)',
                            'Future Mobility (1 Day)'
                        ].map((workshop, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    onChange={(e) => handleWorkshopChange(workshop, e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-700">{workshop}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            {isOpen && <SolutionsProductsPopup setIsApplied={setIsApplied} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} />}
        </div>
    )
}
