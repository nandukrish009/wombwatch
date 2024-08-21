export interface Option {
    option: string;
    optionId: string;
  }
  
  export interface Question {
    question: string;
    questionId: string;
    type: string;
    stepperName: string;
    options?: Option[];
  }
  
  export type FormData = Record<string, string>;
  