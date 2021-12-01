import { TitleContainer } from "./styles";
import { useHistory } from "react-router";

export const Title = () => {

  const history = useHistory()
  return (
    <TitleContainer>
      <div onClick={() => history.push('/home')}>Home</div>
      <div onClick={() => history.push('/cart')}>Carrinho</div>
    </TitleContainer>
  );
};
