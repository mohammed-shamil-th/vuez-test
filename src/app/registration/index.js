import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Sidebox from './sidebar/Sidebox';

export default function RegistationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    region: '',
    email: '',
    confirmEmail: '',
    nationality: '',
    mobile: '',
    companyName: '',
    jobTitle: '',
    companyType: '',
    industry: '',
    workshops: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWorkshopChange = (workshop, checked) => {
    setFormData(prev => ({
      ...prev,
      workshops: checked 
        ? [...prev.workshops, workshop]
        : prev.workshops.filter(w => w !== workshop)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 space-x-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
              1
            </div>
            <div className="w-16 h-1 bg-green-600 ml-2"></div>
          </div>
          <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
            2
          </div>
          <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
            3
          </div>
          <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
            4
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-green-700 text-white px-6 py-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Registration Information 1</h2>
                <span className="text-sm bg-green-600 px-3 py-1 rounded">
                  PREMIUM TICKET - FREE incl. 19% VAT
                </span>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country of residence <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                      <option>Please Select</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Region */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                      <option>Please Select</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                {/* Confirm Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Email address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.confirmEmail}
                    onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                      <option>Please Select</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      <span className="text-green-600 mr-1">🇳🇬</span>
                      <span className="text-sm">+234</span>
                      <ChevronDownIcon className="h-4 w-4 text-gray-400 ml-1" />
                    </div>
                    <input
                      type="tel"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  />
                </div>

                {/* Company Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                      <option>Please Select</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                      <option>Please Select</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Products & Services Section */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    What products & services are you interested in? <span className="text-red-500">*</span>
                  </label>
                  <button className="bg-red-700 text-white px-4 py-1 rounded text-sm font-medium">
                    SELECT SOLUTIONS/PRODUCTS
                  </button>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Select Workshop <span className="text-gray-500">(Maximum 6 can Select)</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
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
              </div>

              {/* Next Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-green-700 text-white px-8 py-2 rounded font-medium hover:bg-green-800 transition-colors">
                  NEXT
                </button>
              </div>
            </div>
          </div>

         <Sidebox />
        </div>
      </div>
    </div>
  );
}