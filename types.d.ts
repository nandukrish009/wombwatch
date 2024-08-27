 interface Question {
  questionID: number,
  sectionID: number,
  sectionName: string,
  questionText: string,
  possibleAnswers: string,
  normalLevels: string,
  abnormalLevels: string,
  questionType: string,
  active: boolean,
}

interface Section {
  sectionID: number;
  sectionName: string;
  questions: Question[];
}