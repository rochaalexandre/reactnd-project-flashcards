import Types from './types';

export default function decks(state = {}, action) {
  switch (action.type) {
    case Types.RETRIEVE_DECKS_SUCCESS:
      return { ...state, ...action.payload.data };
    case Types.ADD_DECK_SUCCESS:
      return { ...state, [action.payload.id]: action.payload.deck };
    case Types.DELETE_DECK_SUCCESS:
      const newState = { ...state };
      delete newState[action.payload.deckId];
      return newState;
    default:
      return state;
  }
}

const decks = state => state.decks;

const getDeck = (state, id) => {
  return state.decks[id];
};

export const Selectors = {
  getDeck: (state, id) => getDeck(state, id),
  getDecks: state => getDecks(state)
};
