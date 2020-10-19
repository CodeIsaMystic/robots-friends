import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialeState = {
  searchField: ''
};

export const searchRobots = (state=initialeState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload });
    default: 
      return state;
  }
}; 