import { create } from "zustand";
import type { Card, CardInput } from "../shared/types/common.types";
import { v4 } from "uuid";

type ViewMode = 'study' | 'allCards'

export interface FlashcardStore {
  cards: Card[];
  selectedCategories: string[];
  toggleCategories: (category: string) => void;
  hideMastered: boolean;
  view: ViewMode;
  activeModal: {type: 'edit' | 'delete', cardId: string} | null;
  setActiveModal: (modal: {type: 'edit' | 'delete', cardId: string} | null) => void;
  setView: (mode: ViewMode) => void;


  // Card Actions
  loadCards: (cards: Card[]) => void;
  addCard: (card: CardInput) => void;
  deleteCard: (id: string) => void;
  updateCard: (id: string, updates: Partial<Card>) => void;
  shuffleCards: () => void;
  toggleHideMastered: () => void;
}

export const useFlashcardStore = create<FlashcardStore>((set) => ({
  cards: [],
  selectedCategories: [],
  view: 'study',
  hideMastered: false,
  activeModal: null,

  toggleCategories: (category) => set(state => ({
    selectedCategories: state.selectedCategories.includes(category)
      ? state.selectedCategories.filter(c => c !== category)
      : [...state.selectedCategories, category]
  })),

  setActiveModal: (modal) => set({activeModal: modal}),

  setView: (view) => set({view}),

  loadCards: (cards) => set({cards}),

  addCard: (card) => set(state => ({
    cards: [...state.cards, {...card, id: v4(), masteryLevel: 0}]
  })),

  deleteCard: (id) => set(state => {
    const updatedCards = state.cards.filter(card => card.id !== id)
    const existingCategories = new Set(updatedCards.map(card => card.category))
    const newSelectedCategories = state.selectedCategories?.filter(category =>
      existingCategories.has(category)
    ) ?? null;
    return {
      cards: updatedCards,
      selectedCategories: newSelectedCategories.length ? newSelectedCategories : [],
    }
  }),

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