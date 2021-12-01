import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 100%;
  margin-left: 2.5vw;
  color: var(--azure);

  .final-button {
    margin-top: 15px;
  }
`;

export const CartProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 200px;
  background-color: var(--blue);
  border: 2px solid var(--azure);
  border-radius: 5px;
  margin: 10px;

  button {
    border: none;
    display: flex;
    align-items: flex-start;
    color: var(--mediumgray);
    height: 20px;
    font-size: 20px;
    margin: 10px;
    background-color: var(--blue);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const EmptyCartContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  h3 {
    margin: 30px 0;
  }
`;
