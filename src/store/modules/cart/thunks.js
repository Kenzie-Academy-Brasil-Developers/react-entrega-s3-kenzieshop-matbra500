import { addProduct, subProduct } from "./actions";

export const addProductToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KenzieGames:cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("@KenzieGames:cart", JSON.stringify(newList));

  dispatch(addProduct(product));
};

export const subProductFromCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KenzieGames:cart")) || [];

  const newFilteredList = list.filter((item) => item !== product);

  localStorage.setItem("@KenzieGames:cart", JSON.stringify(newFilteredList));

  dispatch(subProduct(product));
};
