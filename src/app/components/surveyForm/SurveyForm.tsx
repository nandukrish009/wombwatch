"use client"
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { questions } from '../../../data/questions'; // Adjust the import path as necessary

// Define types for form data
interface FormData {
  [key: string]: any;
}

interface QuestionOption {
  option: string;
  optionId: string;
}

interface Question {
  question: string;
  questionId: string;
  type: 'input' | 'checkbox' | 'single-choice' | 'select';
  stepperName: string;
  options?: QuestionOption[];
}

const SurveyForm: React.FC = () => {
  const { control, handleSubmit, watch } = useForm<FormData>();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form Data:', data);
  };

  // Filter questions for the current step
  const steps: Question[] = questions.filter(
    (q) => q.stepperName === `step ${currentStep}`
  );

  return (
    <div className='my-6 mx-4'>
    <form onSubmit={handleSubmit(onSubmit)}>
      {steps.map((question) => {
        switch (question.type) {
          case 'input':
            return (
              <div key={question.questionId} className='flex flex-col gap-4 my-8'>
                <label className='text-dark-blue text-[14px] font-semibold'>{question.question}</label>
                <Controller
                  name={question.questionId}
                  control={control}
                  render={({ field }) => <input {...field} className='py-3 px-5 border border-slate-500 w-1/2 rounded-lg'/>}
                />
              </div>
            );
          case 'checkbox':
            return (
              <div key={question.questionId} className='my-8'>
                <label className='text-dark-blue text-[14px] font-semibold'>{question.question}</label>
                <div className='grid grid-cols-3 gap-4 my-4'>
                {question.options?.map((option) => (
                  <div key={option.optionId}>
                    <Controller
                      name={question.questionId}
                      control={control}
                      render={({ field }) => (
                        <div className='border-slate-500 border rounded-lg py-3 px-4 flex items-center gap-2'>
                          <input
                            type="checkbox"
                            className='w-4 h-4'
                            {...field}
                          />
                          <label>{option.option}</label>
                        </div>
                      )}
                    />
                  </div>
                ))}
                </div>
              </div>
            );
          case 'single-choice':
            return (
              <div key={question.questionId} className='my-8'>
                <label className='text-dark-blue text-[14px] font-semibold'>{question.question}</label>
                <div className='grid grid-cols-3 gap-4 my-4'>
                {question.options?.map((option) => (
                  <div key={option.optionId}>
                    <Controller
                      name={question.questionId}
                      control={control}
                      render={({ field }) => (
                        <div className='border-slate-500 border rounded-lg py-3 px-4 flex items-center gap-2'>
                          <input
                            type="radio"
                            className='w-4 h-4'
                            {...field}
                          />
                          <label>{option.option}</label>
                        </div>
                      )}
                    />
                  </div>
                ))}
                </div>
              </div>
            );
            case 'select':
            return (
              <div key={question.questionId} className='flex flex-col gap-4 my-8'>
                <label>{question.question}</label>
                <Controller
                  name={question.questionId}
                  control={control}
                  render={({ field }) => (
                    <select {...field} className='py-3 px-5 border border-slate-500 w-1/2 rounded-lg'>
                      {question.options?.map((option) => (
                        <option key={option.optionId} value={option.optionId}>
                          {option.option}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            );
          default:
            return null;
        }
      })}
      <div className='flex justify-between relative'>
        {currentStep > 1 && (
          <button type="button" onClick={handleBack} className='bg-dark-blue text-white rounded-lg py-3 px-9 font-medium'>
            Back
          </button>
        )}
        {currentStep < 3 && (
          <button type="button" onClick={handleNext} className='bg-blue text-white rounded-lg py-3 px-9 font-medium'>
            Next
          </button>
        )}
        {currentStep === 3 && (
          <button type="submit" className='bg-blue text-white rounded-lg py-3 px-9 font-medium'>Submit</button>
        )}
      </div>
    </form>
    </div>
  );
};

export default SurveyForm;
