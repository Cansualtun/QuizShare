export interface ResultCardProps {
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
