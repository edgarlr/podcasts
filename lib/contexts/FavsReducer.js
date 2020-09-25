import { ADD_TO_FOLLOW, REMOVE_FROM_FOLLOW } from './types';

export const FavsReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FOLLOW:
      return {
        ...state,
        myList: [...state.myList, action.data],
      };
    case REMOVE_FROM_FOLLOW:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.data.id),
      };
    default:
      return {
        state,
      };
  }
};
