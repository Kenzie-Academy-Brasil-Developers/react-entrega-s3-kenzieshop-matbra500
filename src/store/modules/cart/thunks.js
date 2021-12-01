import { addProduct, subProduct } from "./actions";
import { v4 } from "uuid";

export const addProductToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KenzieGames:cart")) || [];

  product.id = v4();

  const newList = [...list, product];

  localStorage.setItem("@KenzieGames:cart", JSON.stringify(newList));

  dispatch(addProduct(product));
};

export const subProductFromCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("@KenzieGames:cart")) || [];

  const newFilteredList = list.filter((object) => object.id !== product.id);

  localStorage.setItem("@KenzieGames:cart", JSON.stringify(newFilteredList));

  dispatch(subProduct(product));
};
