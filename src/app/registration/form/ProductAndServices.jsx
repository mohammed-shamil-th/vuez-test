import React, { useState } from 'react'
import SolutionsProductsPopup from '../popups/SolutionsProductsPopup';
import CategoriesComponent from './Categories';
import { tickets } from '../../datas/tickets';

export default function ProductAndServices({ selectedWorkshops, handleWorkshopChange, ticket }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isApplied, setIsApplied] = useState(false);

    const currentTicket = tickets.find(t => t.id === ticket?.id);
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentTicket?.workshops?.map((workshop) => (
                        <label
                            key={workshop?.id}
                            className="flex items-center px-1 py-1 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                checked={selectedWorkshops?.includes(workshop?.id)}
                                onChange={(e) => handleWorkshopChange(workshop?.id, e.target.checked)}
                            />
                            <span className="ml-2 text-sm text-gray-700">{workshop?.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {isOpen && <SolutionsProductsPopup setIsApplied={setIsApplied} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions} />}
        </div>
    )
}
