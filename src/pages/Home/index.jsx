import { products } from "../../services/products";
import { Button } from "@mui/material";
import { CardContainer, AllCardsContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addProductToCartThunk } from "../../store/modules/cart/thunks";


function Home() {

  

  const dispatch = useDispatch()
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
            <Button variant="contained" onClick={() => dispatch(addProductToCartThunk(product))}>
              Comprar
            </Button>
          </CardContainer>
        );
      })}
    </AllCardsContainer>
  );
}

export default Home;
