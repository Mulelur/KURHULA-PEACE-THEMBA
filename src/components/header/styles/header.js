import styled from "styled-components";
import bg from "../../../assets/Violet.jpeg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bg});
  background-size: cover;
  height: 35rem;
  color: #ffff;
  background-position: center;
  background-size: auto;
`;

export const Title = styled.div``;

export const Text = styled.h2`
  font-size: 3.6rem;
  text-transform: uppercase;
`;
