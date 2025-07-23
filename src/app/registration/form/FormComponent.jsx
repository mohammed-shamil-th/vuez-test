import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import FormHeader from './FormHeader';
import TextBox from '../../../components/common/TextBox';
import SelectBox from '../../../components/common/SelectBox';
import ProductAndServices from './ProductAndServices';
import Sidebox from '../sidebar/Sidebox';


export default function FormComponent() {
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
    <div className="flex gap-6">
      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        <FormHeader />
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <TextBox label="First name"
              name="firstName"
              handleInputChange={handleInputChange}
              value={formData.firstName}
              required={true}
            />
            <TextBox
              label="Last name"
              name="lastName"
              handleInputChange={handleInputChange}
              value={formData.lastName}
              required={true}
            />
            <SelectBox label="Country of residence" required={true} />
            <SelectBox label="Region" />
            <TextBox
              label="Email address"
              name="email"
              handleInputChange={handleInputChange}
              value={formData.email}
              required={true}
              type="email"
            />
            <TextBox
              label="Confirm Email address"
              name="confirmEmail"
              handleInputChange={handleInputChange}
              value={formData.confirmEmail}
              type="email"
            />
            <SelectBox label="Nationality"
            />
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile number <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-gray-50 mr-2">
                  <span className="text-green-600 mr-1">🇳🇬</span>
                  <span className="text-sm">+234</span>
                  <ChevronDownIcon className="h-4 w-4 text-gray-400 ml-1" />
                </div>
                <input
                  type="tel"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                />
              </div>
            </div>
            <TextBox
              label="Company name"
              name="companyName"
              handleInputChange={handleInputChange}
              value={formData.companyName}
              required={true}
            />
            <TextBox
              label="Job title"
              name="jobTitle"
              handleInputChange={handleInputChange}
              value={formData.jobTitle}
              required={true}
            />
            <SelectBox label="Company type"
              required={true} />
            <SelectBox label="Industry"
              required={true} />
          </div>
          <ProductAndServices handleWorkshopChange={handleWorkshopChange} />
        </div>
      </div>
      <Sidebox />
    </div>)
}
