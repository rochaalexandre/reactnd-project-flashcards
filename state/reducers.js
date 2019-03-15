import Types from './types';

export default function decks(state = {}, action) {
  switch (action.type) {
    case Types.RETRIEVE_DECKS_SUCCESS:
      return { ...state, ...action.payload.data.entities.decks };
    case Types.ADD_DECK_SUCCESS:
      return { ...state, [action.payload.id]: action.payload.data.entities.decks };
    case Types.DELETE_DECK_SUCCESS:
      const newState = { ...state };
      delete newState[action.payload.deckId];
      return newState;
    case Types.ADD_CARD_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: {
          cards: [...state[action.payload.deckId].cards, action.payload.data]
        }
      };
    case Types.DELETE_CARD_SUCCESS:
      return {
        ...state,
        [action.payload.deckId]: {
          cards: state[action.payload.deckId].cards.filter(
            card => card.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
}

const getDecks = state => state ? Object.values(state) : [];

const getDeck = (state, id) => {
  return state[id];
};

export const Selectors = {
  getDeck: (state, id) => getDeck(state, id),
  getDecks: (state) => getDecks(state)
};
