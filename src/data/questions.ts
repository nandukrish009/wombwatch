export interface QuestionOption {
    option: string;
    optionId: string;
  }
  
  export interface Question {
    question: string;
    questionId: string;
    type: 'input' | 'checkbox' | 'single-choice' | 'select';
    stepperName: string;
    options?: QuestionOption[];
  }
  
  export const questions: Question[] = [
    {
        "question": "What is your Date of Birth?",
        "questionId": "dob",
        "type": "input",
        "stepperName": "step 1"
    },
    {
        "question": "What is your height?",
        "questionId": "height",
        "type": "input",
        "stepperName": "step 1"
    },
    {
        "question": "What is your Weight?",
        "questionId": "weight",
        "type": "input",
        "stepperName": "step 1"
    },
    {
        "question": "At what age did you have your first pregnancy?",
        "questionId": "first_pregnancy",
        "type": "input",
        "stepperName": "step 1"
    },
    {
        "question": "What is your ethnic background?",
        "questionId": "ethnic_background",
        "type": "select",
        "stepperName": "step 1",
        "options": [
            {
                "option": "African",
                "optionId": "African"
               
            },
            {
                "option": "American/Black",
                "optionId": "AmericanBlack"
                
            },
            {
                "option": "Hispanic Latino/a or Latinx Caucasian/White Asian Native",
                "optionId": "HispanicLatinx"
               
            },
        ]
    },
    {
        "question": "What is your annual household income?",
        "questionId": "household_income",
        "type": "input",
        "stepperName": "step 1"
    },
    {
        "question": "What is your highest level of education completed?",
        "questionId": "education_completed",
        "type": "input",
        "stepperName": "step 1"
    },
    {
        "question": "What is your current employment status?",
        "questionId": "employment_status",
        "type": "input",
        "stepperName": "step 1"
    },
    {
        "question": "Do you have any chronic conditions?",
        "questionId": "chronic_condition",
        "type": "checkbox",
        "stepperName": "step 2",
        "options": [
            {
                "option": "Hypertension",
                "optionId": "Hypertension"
               
            },
            {
                "option": "Diabetes",
                "optionId": "Diabetes"
                
            },
            {
                "option": "Thyroid disorders",
                "optionId": "Thyroid disorders"
               
            },
            {
                "option": "Other",
                "optionId": "Other"
               
            },
        ]
    },
    {
        "question": "Have you ever been diagnosed with pre-eclampsia, GDM, or other pregnancy-related complications?",
        "questionId": "diagnosed_eclampsia_gdm",
        "type": "single-choice",
        "stepperName": "step 2",
        "options": [
            {
                "option": "Yes",
                "optionId": "Yes"
               
            },
            {
                "option": "No",
                "optionId": "No"
                
            }
        ]
    },
    {
        "question": "Is there a family history of pregnancy complications?",
        "questionId": "pregnancy_complications",
        "type": "checkbox",
        "stepperName": "step 2",
        "options": [
            {
                "option": "Pre-eclampsia",
                "optionId": "Pre-eclampsia"
               
            },
            {
                "option": "GDM",
                "optionId": "GDM"
                
            },
            {
                "option": "Preterm birth",
                "optionId": "Preterm birth"
               
            },
            {
                "option": "Other",
                "optionId": "Other"
               
            },
        ]
    },
    {
        "question": "Are there any hereditary conditions in your family?",
        "questionId": "hereditary_condation",
        "type": "single-choice",
        "stepperName": "step 2",
        "options": [
            {
                "option": "Yes",
                "optionId": "Yes"
               
            },
            {
                "option": "No",
                "optionId": "No"
                
            }
        ]
    },
    {
        "question": "If yes, specify?",
        "questionId": "specify",
        "type": "input",
        "stepperName": "step 3"
    },
    {
        "question": "How many pregnancies have you had?",
        "questionId": "pregnancies_no",
        "type": "input",
        "stepperName": "step 3"
    },
    {
        "question": "Have you experienced any complications in previous pregnancies?",
        "questionId": "experienced_pregnancy_complications",
        "type": "checkbox",
        "stepperName": "step 3",
        "options": [
            {
                "option": "Miscarriage",
                "optionId": "Miscarriage"
               
            },
            {
                "option": "Preterm birth",
                "optionId": "Preterm birth"
                
            },
            {
                "option": "IUGR",
                "optionId": "IUGR"
               
            },
            {
                "option": "Other",
                "optionId": "Other"
               
            },
        ]
    },
   
]