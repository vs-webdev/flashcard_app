import type { Card } from "../shared/types/common.types";

interface StoreState {
  cards: Card[];
  selectedCategory: string | null;
  hideMastered: boolean;
}

export const selectFilteredCards = (state: StoreState): Card[] => {
  return state.cards.filter(card => {
    const matchesCategory = !state.selectedCategory || card.category === state.selectedCategory;
    const notMastered = !state.hideMastered || card.masteryLevel !== 5;
    return matchesCategory && notMastered;
  });
};

export const selectStatistcs = (state: StoreState) => {
  let mastered = 0;
  let inProgress = 0;
  let notStarted = 0;

  for (const card of state.cards) {
    if (card.masteryLevel === 5) mastered++;
    else if (card.masteryLevel === 0) notStarted++;
    else inProgress++;
  }

  return {
    total: state.cards.length,
    mastered,
    inProgress,
    notStarted,
  }
}

export const selectCardsByCategory = (state: StoreState, category: string): Card[] => {
  return state.cards.filter(card => card.category === category)
}