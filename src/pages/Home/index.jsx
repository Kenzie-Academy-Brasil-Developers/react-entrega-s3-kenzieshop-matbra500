import { products } from "../../services/products";
import { Button } from "@mui/material";
import { CardContainer, AllCardsContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addProductToCartThunk } from "../../store/modules/cart/thunks";
import { useSelector } from "react-redux";

function Home() {
  const cart = useSelector((state) => state.cartReducer);

  function add(list, product) {
    if (list.some((item) => item.name === product.name) === false) {
      dispatch(addProductToCartThunk(product));
    }
  }

  const dispatch = useDispatch();
  return (
    <AllCardsContainer>
      {products.map((product) => {
        return (
          <CardContainer>
            <div>
              <img src={product.image} alt="game cover" />
            </div>
            <h2>{product.name}</h2>
            <h3>{product.price} R$</h3>
            <Button variant="contained" onClick={() => add(cart, product)}>
              Comprar
            </Button>
          </CardContainer>
        );
      })}
    </AllCardsContainer>
  );
}

export default Home;
