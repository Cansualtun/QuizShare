export interface ResultPopupInterface {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: {
    message: string;
    data: {
      id: string;
      title: string;
      description: string;
      imageUrl: string;
      totalWeight: number;
    };
  } | null;
}
