import styled from "styled-components";

export const Main = styled.main`
  color: ${(props) => props.color};
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 992px) {
    max-width: 1150px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: 992px) {
    padding-top: 55px;
    padding-bottom: 55px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  box-sizing: border-box;
  min-width: 0px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Content = styled.div`
  margin: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading2 = styled.h2``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9rem;
  padding-bottom: 3rem;
`;

export const ListItem = styled.li``;

export const Text = styled.h4`
  font-size: 1.3125rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1;
  color: currentColor;
`;

export const Link = styled.a``;
