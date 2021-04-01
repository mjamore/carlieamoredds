/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import servicesProvidedData from '../../data/servicesProvided';
import RequiredFieldErrorMessage from './requiredFieldErrorMessage';

// Typescript declarations
interface FormData {
  name: string;
  emailAddress: string;
  service: string;
  testimonial: string;
}

interface Service {
  name: string;
  description: string;
}

const submitForm = (formData: FormData): void => {
  console.log('formData: ', formData);

  const emailUrl = `https://carlieamoredds.netlify.app/.netlify/functions/sendNewTestimonialEmail/?name=${formData.name}&email=${formData.emailAddress}&service=${formData.service}&testimonial=${formData.testimonial}`;

  axios.get(emailUrl)
    .then((response) => {
      console.log('success response: ', response);
    })
    .catch((error) => {
      console.log('error response: ', error);
    });
};

const TestimonialForm = (): ReactElement => {
  const { register, handleSubmit, errors } = useForm();
  const labelClasses = 'block my-3';
  const inputClasses = 'block border border-gray-400 focus:outline-green p-1 text-sm w-full';
  const selectMenuClasses = 'block border border-gray-400 focus:outline-green p-1 text-sm w-full';
  const textareaClasses = 'block border border-gray-400 focus:outline-green h-20 p-1 resize-y text-sm w-full';
  const requiredFieldClasses = 'ml-0.5 text-red-800 text-xs';

  const serviceOptions = servicesProvidedData.map((service: Service): ReactElement => (
    <option key={service.name} value={service.name}>{service.name}</option>
  ));

  return (
    <form className='bg-gray-100 border border-gray-200 max-w-2xl mx-5 my-10 p-5 text-font-color text-left md:mx-auto' onSubmit={handleSubmit(submitForm)}>
      <h4>Share Your Experience</h4>
      <hr />
      <label className={labelClasses} htmlFor='name'>
        Name
        <span className={requiredFieldClasses}>*</span>
        <input className={inputClasses} type='text' name='name' ref={register({ required: true })} />
        {errors.name && <RequiredFieldErrorMessage />}
      </label>
      <label className={labelClasses} htmlFor='emailAddress'>
        Email address
        <span className={requiredFieldClasses}>*</span>
        <input className={inputClasses} type='email' name='emailAddress' ref={register({ required: true })} />
        {errors.emailAddress && <RequiredFieldErrorMessage />}
      </label>
      <label className={labelClasses} htmlFor='service'>
        Service Performed
        <span className={requiredFieldClasses}>*</span>
        <select className={selectMenuClasses} name='service' ref={register({ required: true })}>
          {serviceOptions}
          <option value='other'>Other</option>
        </select>
        {errors.service && <RequiredFieldErrorMessage />}
      </label>
      <label className={labelClasses} htmlFor='testimonial'>
        Describe Your Experience
        <span className={requiredFieldClasses}>*</span>
        <textarea className={textareaClasses} name='testimonial' ref={register({ required: true })} />
        {errors.testimonial && <RequiredFieldErrorMessage />}
      </label>
      <input className='bg-green border border-gray-400 cursor-pointer mt-3 w-full' type='submit' value='Submit' />
    </form>
  );
};

export default TestimonialForm;