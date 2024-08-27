"use client"
import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    TextField,
    MenuItem,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
} from '@mui/material';
import { surveyQuestions as questionData } from '@/data/surveyQuestions';

const groupQuestionsBySection = (questions: Question[]): Section[] => {
    const sectionsMap: { [key: number]: Section } = {};

    questions.forEach((question) => {
        if (!sectionsMap[question.sectionID]) {
            sectionsMap[question.sectionID] = {
                sectionID: question.sectionID,
                sectionName: question.sectionName,
                questions: []
            };
        }
        sectionsMap[question.sectionID].questions.push(question);
    });

    return Object.values(sectionsMap);
};

const sections = groupQuestionsBySection(questionData);

const StepperForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [activeStep, setActiveStep] = useState(0);
    const [totalSteps, setTotalSteps] = useState(sections.length);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSubmit = (data: any) => {
        console.log('Form Data: ', data);
    };
    const progressPercentage = (activeStep / totalSteps) * 100;

    return (
      <div className='flex flex-col justify-center relative mx-7'>
        <div className='w-full h-[calc(100vh_-_65px)] overflow-x-hidden overflow-y-scroll transparentscroll'>
        <div className='sticky top-0 w-full z-10 pt-8 bg-white'>
          <div className='flex justify-between items-center'>
          <h2 className='text-[32px] font-semibold bg-white text-dark-blue'>About Your Health</h2>
          <p className='text-[10px] text-dark-blue font-semibold mr-2'>Step {activeStep + 1}/{totalSteps}</p>
          </div>
          <div className='w-full h-0.5 bg-slate-300'>
            <div
              className='h-full bg-blue transition-all duration-300'
              style={{ width: `${progressPercentage + 1}%` }}
            />
          </div>
        </div>
        <div className='my-9'>
        <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep < sections.length && (
                <div className='flex'>
                <div className='w-2/5'>
                <p className='text-[14px] font-montserrat font-semibold text-dark-blue mt-5'>{sections[activeStep].sectionName}</p>
                <p className='text-[12px] text-slate-400'>Provide your {sections[activeStep].sectionName}</p>
                </div>
                    
              <div  className='w-3/5 flex flex-col justify-between'>
                <div>
                    {sections[activeStep].questions.map((question) => (
                        <div key={question.questionID} className='my-5'>
                            <p className='text-[14px] font-montserrat font-semibold text-dark-blue pb-3'>{question.questionText}</p>
                            <Controller
                                      name={`question_${question.questionID}`}
                                      control={control}
                                      defaultValue=""
                                      render={({ field }) => {
                                          switch (question.questionType) {
                                              case "Blank(String)":
                                                return (
                                                  <input
                                                      {...field}
                                                      
                                                      type='text'
                                                      className='bg-transparent focus:ring-0 focus:outline-none text[14px] border rounded-sm border-slate-400 w-full py-3 px-4'

                                            />
                                        );
                                              case "Blank(Decimal)":
                                                  return (
                                                    <input
                                                    {...field}
                                                    type='number'
                                                    className='bg-transparent focus:ring-0 focus:outline-none text[14px] border rounded-sm border-slate-400 w-full py-3 px-4'

                                          />
                                            );
                                        case "DatePicker":
                                            return (
                                                <input
                                                    {...field}
                                                    type="date"
                                                    className='bg-transparent focus:ring-0 focus:outline-none text[14px] border rounded-sm border-slate-400 py-3 px-4 w-full'
                                                />
                                            );
                                        case "Dropdown":
                                            return (
                                                <TextField
                                                    {...field}
                                                    select
                                                    variant="outlined"
                                                    fullWidth
                                                    error={!!errors[`question_${question.questionID}`]}
                                                    helperText={errors[`question_${question.questionID}`]?.message?.toString()}
                                                >
                                                    {question.possibleAnswers.split('/').map((option, index) => (
                                                        <MenuItem key={index} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            );
                                        case "Radio":
                                            return (
                                                <FormControl component="fieldset">
                                                    {/* <FormLabel component="legend">{question.questionText}</FormLabel> */}
                                                    
                                                    <RadioGroup {...field} className='flex flex-row'>
                                                        {question.possibleAnswers.split('/').map((option, index) => (
                                                         
                                                            <FormControlLabel
                                                                key={index}
                                                                value={option}
                                                                control={<Radio />}
                                                                label={option}
                                                                />
                                                               
                                                        ))}
                                                    </RadioGroup>
                                                </FormControl>
                                            );
                                        default:
                                            return <Fragment />; 
                                    }
                                }}                           
                                 />
                        </div>
                    ))}
              </div>
              <div className='flex gap-4 justify-between items-center relative my-3 w-full'>
              <div>
                <p className='text-[12px] text-slate-400'>*This field are mandatory</p>
              </div>
              <div className='flex relative gap-4'>
                  {activeStep > 0 && (
                      <button onClick={handleBack} className='bg-dark-blue text-white rounded-md py-3 px-9 font-medium'>Back</button>
                  )}
                  {activeStep < sections.length - 1 ? (
                      <button color="primary" onClick={handleNext} className='bg-blue text-white rounded-md py-3 px-9 font-medium'>
                          Next
                      </button>
                  ) : (
                      <button color="primary" type="submit" className='bg-blue text-white rounded-md py-3 px-9 font-medium'>
                          Submit
                      </button>
                  )}
              </div>
              </div>

                    </div>
                </div>
            )}
        </form>
        </div>
        </div>
        </div>
    );
};

export default StepperForm;
