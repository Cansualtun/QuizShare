export interface Root {
  message: string;
  surveys: Survey[];
  pagination: Pagination;
}

export interface Survey {
  _id: string;
  title: string;
  description: string;
  headerImageUrl: string;
  resultCategories: ResultCategory[];
  createdBy: CreatedBy;
  isDeleted: boolean;
  isDraft: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ResultCategory {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface CreatedBy {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalSurveys: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Result Type

export interface ResultCardType {
  message: string;
  data: Data;
}

export interface Data {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  totalWeight: number;
}

export interface ResultSurveyParams {
  data: ResultData[];
}

export interface ResultData {
  questionId: string;
  answerId: string;
}
