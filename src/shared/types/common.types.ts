export interface Card {
  id: string;
  question: string;
  answer: string;
  category: string;
  masteryLevel: CardMastery;
}

export type CardMastery = 0 | 1 | 2 | 3 | 4 | 5

export type CreateCardInput = {
  question: string,
  answer: string,
  category: string,
}