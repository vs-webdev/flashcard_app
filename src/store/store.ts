import { create } from "zustand";
import type { Card } from "../shared/types/common.types";
import { v4 } from "uuid";

interface FlashcardStore {
  cards: Card[];
  hideMastered: boolean;

  // Card Actions
  loadCards: (cards: Card[]) => void;
  addCard: (card: Omit<Card, 'id'>) => void;
  deleteCard: (id: string) => void;
  updateCard: (id: string, updates: Partial<Card>) => void;
  shuffleCards: () => void;
  toggleHideMastered: () => void;
}

export const useFlashcardStore = create<FlashcardStore>((set) => ({
  cards: [],
  hideMastered: false,

  loadCards: (cards) => set({cards}),

  addCard: (card) => set(state => ({
    cards: [...state.cards, {...card, id: v4(), masteryLevel: 0}]
  })),

  deleteCard: (id) => set(state => ({
    cards: state.cards.filter(card => card.id !== id)
  })),

  updateCard: (id, updates) => {
    set(state => ({
      cards: state.cards.map(card =>
        card.id === id ? {...card, ...updates} : card
      )
    }))
  },

  shuffleCards: () => {
    set(state => {
      const newCards = [...state.cards];
      for (let i = newCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newCards[i], newCards[j]] = [newCards[j], newCards[i]]
      }
      return {cards: newCards}
    })
  },

  toggleHideMastered: () => set(state => ({hideMastered: !state.hideMastered}))
}))