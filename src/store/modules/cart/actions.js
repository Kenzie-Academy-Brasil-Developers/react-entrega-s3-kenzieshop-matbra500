import { ADD_PRODUCT, SUB_PRODUCT } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const subProduct = (product) => ({
  type: SUB_PRODUCT,
  product,
});
