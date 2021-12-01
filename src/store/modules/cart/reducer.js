import { ADD_PRODUCT, SUB_PRODUCT } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem('@KenzieGames:cart')) || []

const cartReducer = (state = defaultState, action) => {
  const { product } = action;
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, product];

    case SUB_PRODUCT:
      return state.filter((item) => item !== product)

    default:
      return state;
  }
};

export default cartReducer