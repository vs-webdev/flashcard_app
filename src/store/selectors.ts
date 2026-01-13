import type { Card } from "../shared/types/common.types";
import type { FlashcardStore } from "./store";

export const selectFilteredCards = (state: FlashcardStore): Card[] => {
  const {cards, selectedCategories, hideMastered} = state;

  const categoryFiltered = selectedCategories.length > 0
    ? cards.filter(card => selectedCategories.includes(card.category))
    : cards;
  
  if (hideMastered) {
    return categoryFiltered.filter(card => card.masteryLevel !== 5)
  }

  return categoryFiltered;
};