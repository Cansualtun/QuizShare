export interface QuestionCardProps {
  survey: Survey;
  questions: Question[];
}

export interface Survey {
  _id: string;
  title: string;
  description: string;
  headerImageUrl: string;
  slug: string;
  resultCategories: ResultCategory[];
  createdBy: CreatedBy;
  isDeleted: boolean;
  isDraft: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ResultCategory {
  title: string;
  description: string;
  imageUrl: string;
  _id: string;
}

export interface CreatedBy {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface Question {
  _id: string;
  text: string;
  order: number;
  weight: number;
  answers: Answer[];
}

export interface Answer {
  _id: string;
  text: string;
  order: number;
  weight: number;
}
