import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import FormHeader from './FormHeader';
import TextBox from '../../../components/common/TextBox';
import SelectBox from '../../../components/common/SelectBox';
import ProductAndServices from './ProductAndServices';
import Sidebox from '../sidebar/Sidebox';
import { useBooking } from '../../../context/BookingContext';
import FormFooterButtons from './FormFooterButtons';
import ErrorWarning from '../../../components/common/ErrorWarning';
import { companyTypes, countries, countryDialData, industries, regions } from '../../datas/selectOptions';
import { getFlagEmoji } from '../../helper-functions/helper';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email')], 'Emails must match')
    .required('Confirm Email is required'),
  mobile: Yup.string()
    .matches(/^[0-9]+$/, 'Mobile must be numbers only')
    .required('Mobile number is required'),
  companyName: Yup.string().required('Company name is required'),
  jobTitle: Yup.string().required('Job title is required'),
  country: Yup.string().required('Country is required'),
  companyType: Yup.string().required('Company type is required'),
  industry: Yup.string().required('Industry is required'),
  mobileCountry: Yup.string().required('Mobile country code is required'),
  mainCategories: Yup.array()
    .min(1, 'Please select at least one product or service')
});

export default function FormComponent({ attendee, step, handleNext, handlePrev, tickets }) {
  const { dispatch } = useBooking();

  const ticket = useMemo(
    () => tickets.find(t => t.id === attendee.ticketId),
    [attendee, tickets]
  );

  const formik = useFormik({
    initialValues: {
      firstName: attendee?.firstName || '',
      lastName: attendee?.lastName || '',
      country: attendee?.country || '',
      region: attendee?.region || '',
      email: attendee?.email || '',
      confirmEmail: attendee?.confirmEmail || '',
      nationality: attendee?.nationality || '',
      mobile: attendee?.mobile || '',
      companyName: attendee?.companyName || '',
      jobTitle: attendee?.jobTitle || '',
      companyType: attendee?.companyType || '',
      industry: attendee?.industry || '',
      mobileCountry: attendee?.mobileCountry || "+91",
      workshops: attendee?.workshops || [],
      mainCategories: attendee?.mainCategories || [],
      subCategories: attendee?.subCategories || [],
      
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch({
        type: 'updateAttendee',
        payload: {
          ticketId: attendee.ticketId,
          attendeeId: attendee.id,
          values,
        },
      });
      formik.resetForm();
      handleNext();
    },
  });

  const handleWorkshopChange = (id, checked) => {
    const existingWorkshops = formik.values.workshops || [];
    if (existingWorkshops?.length >= 6 && checked) {
      alert('You can select a maximum of 6 workshops.');
      return;
    }
    const newWorkshops = checked
      ? [...existingWorkshops, id]
      : existingWorkshops.filter((w) => w !== id);
    formik.setFieldValue('workshops', newWorkshops);
  };

  return (
    <form key={step} onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <FormHeader step={step} />
          <div className="p-6">
            <div className="grid grid-cols lg:grid-cols-2 gap-6 mb-6">

              {/* First Name */}
              <TextBox
                label="First name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && formik.errors.firstName}
                required
              />

              {/* Last Name */}
              <TextBox
                label="Last name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && formik.errors.lastName}
                required
              />

              {/* Country */}
              <SelectBox
                label="Country of residence"
                name="country"
                value={formik.values.country}
                options={countries}
                onChange={value => formik.setFieldValue('country', value)}
                error={formik.touched.country && formik.errors.country}
                required
              />

              {/* Region */}
              <SelectBox
                label="Region"
                name="region"
                value={formik.values.region}
                options={regions}
                onChange={value => formik.setFieldValue('region', value)}
              />

              {/* Email */}
              <TextBox
                label="Email address"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
                required
              />

              {/* Confirm Email */}
              <TextBox
                label="Confirm Email address"
                name="confirmEmail"
                type="email"
                value={formik.values.confirmEmail}
                onChange={formik.handleChange}
                error={formik.touched.confirmEmail && formik.errors.confirmEmail}
                required
              />

              {/* Nationality */}
              <SelectBox
                label="Nationality"
                name="nationality"
                value={formik.values.nationality}
                options={countries}
                onChange={value => formik.setFieldValue('nationality', value)}
              />

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select
                    className='flex items-center px-2 sm:px-3 py-2 border border-gray-300 rounded-md bg-gray-50 mr-2'
                    name="mobileCountry"
                    value={formik.values.mobileCountry}
                    onChange={e => formik.setFieldValue("mobileCountry", e.target.value)}
                  >
                    {countryDialData.map((c) => (
                      <option key={c.iso} value={c.dialCode}>
                        {getFlagEmoji(c.iso)} {c.dialCode}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="mobile"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.mobile && formik.errors.mobile && (
                  <ErrorWarning error={formik.errors.mobile} />
                )}
              </div>

              {/* Company Name */}
              <TextBox
                label="Company name"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                error={formik.touched.companyName && formik.errors.companyName}
                required
              />

              {/* Job Title */}
              <TextBox
                label="Job title"
                name="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                error={formik.touched.jobTitle && formik.errors.jobTitle}
                required
              />

              {/* Company Type */}
              <SelectBox
                label="Company type"
                name="companyType"
                value={formik.values.companyType}
                options={companyTypes}
                onChange={value => formik.setFieldValue('companyType', value)}
                error={formik.touched.companyType && formik.errors.companyType}
                required
              />

              {/* Industry */}
              <SelectBox
                label="Industry"
                name="industry"
                value={formik.values.industry}
                options={industries}
                onChange={value => formik.setFieldValue('industry', value)}
                error={formik.touched.industry && formik.errors.industry}
                required
              />
            </div>

            {/* Workshops */}
            <ProductAndServices
              handleWorkshopChange={handleWorkshopChange}
              selectedWorkshops={formik.values.workshops}
              ticket={ticket}
              formik={formik}
            />
          </div>
        </div>
        <Sidebox values={formik.values} ticket={ticket} step={step} />
      </div>

      {/* Footer Buttons */}
      <FormFooterButtons step={step} handleNext={formik.handleSubmit} handlePrev={handlePrev} />
    </form>
  );
}
