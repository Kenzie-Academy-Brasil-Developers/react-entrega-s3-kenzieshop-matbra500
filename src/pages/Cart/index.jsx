import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import {
  CartContainer,
  CartProductContainer,
  ImageContainer,
  DescriptionContainer,
  EmptyCartContainer,
} from "./styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { subProductFromCartThunk } from "../../store/modules/cart/thunks";

function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const total = cart
    .reduce((product, acc) => acc.price + product, 0)
    .toFixed(2);

  if (cart.length > 0) {
    return (
      <CartContainer>
        {cart.map((product, index) => {
          return (
            <CartProductContainer key={index}>
              <ImageContainer>
                <img src={product.image} alt="game cover" />
              </ImageContainer>

              <DescriptionContainer>
                <h2>{product.name}</h2>
                <h3>{product.price} R$</h3>
              </DescriptionContainer>
              <button
                onClick={() => dispatch(subProductFromCartThunk(product))}
              >
                <MdDelete />
              </button>
            </CartProductContainer>
          );
        })}

        <h2>Total: {total} R$</h2>
        <Button className="final-button" variant="contained">
          Finalizar pedido
        </Button>
      </CartContainer>
    );
  } else {
    return (
      <EmptyCartContainer>
        <h3>Nada por aqui</h3>
        <Button onClick={() => history.push("/")} variant="contained">
          Ir para a home
        </Button>
      </EmptyCartContainer>
    );
  }
}

export default Cart;
