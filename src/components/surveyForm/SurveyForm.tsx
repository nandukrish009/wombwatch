"use client"
import React, { useState, useRef, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { questions } from '../../data/questions'; // Adjust the import path as necessary

// Define types for form data
interface FormData {
  [key: string]: any;
}

export interface QuestionOption {
    option: string;
    optionId: string;
  }
  
  export interface Question {
    question: string;
    questionId: string;
    type: 'input' | 'checkbox' | 'single-choice' | 'select';
    options?: QuestionOption[];
  }

  export interface FromQuestions{
    title: string;
    stepperName: string;
    questions: Question[];
  }

const SurveyForm: React.FC = () => {
  const { control, handleSubmit, setValue, watch } = useForm<FormData>();
  const [currentStep, setCurrentStep] = useState(1);
  const scrollableRef = useRef<HTMLDivElement>(null);


  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form Data:', data);
  };

  const steps: FromQuestions[] = questions
    .filter((q) => q.stepperName === `step ${currentStep}`)
    // .flatMap(item => item.questions);

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className='flex flex-col justify-center relative mx-7'>
      <div ref={scrollableRef} className='w-full h-[calc(100vh_-_65px)] overflow-x-hidden overflow-y-scroll transparentscroll'>
        <div className='sticky top-0 w-full z-10 pt-8 bg-white'>
          <div className='flex justify-between items-center'>
          <h2 className='text-[32px] font-semibold bg-white text-dark-blue'>About Your Health</h2>
          <p className='text-[10px] text-dark-blue font-semibold mr-2'>Step {currentStep}/{totalSteps}</p>
          </div>
          <div className='w-full h-0.5 bg-slate-300'>
            <div
              className='h-full bg-blue transition-all duration-300'
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className='my-11'>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            {steps.map((questions, index:number) => {

              return(
                <div key={index + 1} className='flex border-b border-slate-200'>
                <div className='w-2/5'>
                <p className='text-[14px] font-montserrat font-semibold text-dark-blue mt-5'>{questions.title}</p>
                <p className='text-[12px] text-slate-400'>Provide your {questions.title}</p>
                </div>
                <div className='w-3/5'>
                {questions.questions.map((question) => {
               switch (question.type) {
                case 'input':
                  return (
                    <div key={question.questionId} className='flex flex-col my-8'>
                      <label className='text-[14px] font-montserrat font-semibold text-dark-blue pb-3'>{question.question}</label>
                      <Controller
                        name={question.questionId}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <input
                            
                            {...field}
                            className='bg-transparent py-3 px-2 focus:ring-0 focus:outline-none text[14px] border rounded-sm border-slate-400'
                          />
                        )}
                      />
                      </div>
                  );
                case 'checkbox':
                  return (
                    <div key={question.questionId} className='flex flex-col my-8'>
                      <label className='text-[14px] font-montserrat font-semibold text-dark-blue pb-3'>{question.question}</label>
                      <div className='grid grid-cols-3 gap-4'>
                        {question.options?.map((option) => (
                          <div key={option.optionId}>
                            <Controller
                              name={question.questionId}
                              control={control}
                              defaultValue={[]}
                              render={({ field }) => (
                                <div className={`border-slate-500 border rounded-sm py-3 px-4 flex items-center gap-2 cursor-pointer`} 
                                // style={{backgroundColor : field.value.includes(option.optionId) ? '#E3E2DF' : '#ffffff'}}
                                key={option.optionId}
                                onClick={() => {
                                  // Handle the click event
                                  const newValue = field.value.includes(option.optionId)
                                    ? field.value.filter((id: string) => id !== option.optionId)
                                    : [...field.value, option.optionId];
                                  field.onChange(newValue);
                                }}>
                                  <input
                                    type="checkbox"
                                    className='w-4 h-4'
                                    checked={field.value.includes(option.optionId)}
                                    onChange={(e) => {
                                      const newValue = e.target.checked
                                        ? [...field.value, option.optionId]
                                        : field.value.filter((id: string) => id !== option.optionId);
                                      field.onChange(newValue);
                                    }}
                                  />
                                  <label className='cursor-pointer'>{option.option}</label>
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
                    <div key={question.questionId} className='flex flex-col my-8'>
                      <label className='text-[14px] font-montserrat font-semibold text-dark-blue pb-3'>{question.question}</label>
                      <div className='grid grid-cols-3 gap-4'>
                        {question.options?.map((option) => (
                          <div key={option.optionId}>
                            <Controller
                              name={question.questionId}
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <div className='border-slate-500 border rounded-sm py-3 px-4 flex items-center gap-2 cursor-pointer'
                                key={option.optionId}
                                onClick={() => 
                                  field.onChange(option.optionId)
                                }
                                >
                                  <input
                                    type="radio"
                                    className='w-4 h-4'
                                    checked={field.value === option.optionId}
                                    onChange={() => field.onChange(option.optionId)}
                                  />
                                  <label className='cursor-pointer'>{option.option}</label>
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
                    <div key={question.questionId} className='flex flex-col my-8'>
                      <label className='text-[14px] font-montserrat font-semibold text-dark-blue pb-3'>{question.question}</label>
                      <Controller
                        name={question.questionId}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <select
                            {...field}
                            className='py-3 px-5 border border-slate-500 rounded-sm'
                          >
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
                </div>
                </div>
              )
            })}

            <div className='flex relative my-3 justify-end'>
              <div className='flex gap-4 justify-between items-center w-3/5'>
              <div>
                <p className='text-[12px] text-slate-400'>*This field are mandatory</p>
              </div>
              <div className='flex relative gap-4'>
              {currentStep > 1 && (
                <button type="button" onClick={handleBack} className='bg-dark-blue text-white rounded-lg py-3 px-9 font-medium'>
                  Back
                </button>
              )}
              {currentStep < totalSteps && (
                <button type="button" onClick={handleNext} className='bg-blue text-white rounded-lg py-3 px-9 font-medium'>
                  Next
                </button>
              )}
              {currentStep === totalSteps && (
                <button type="submit" className='bg-blue text-white rounded-lg py-3 px-9 font-medium'>Submit</button>
              )}
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SurveyForm;
