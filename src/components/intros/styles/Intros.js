import styled from "styled-components";

export const Main = styled.main``;

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

export const Heading2 = styled.h2`
  font-weight: 700;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 0px;
  color: currentColor;
`;

export const Heading3 = styled.h3``;

export const Heading4 = styled.h4``;

export const Content = styled.div`
  margin: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 992px) {
    margin: 4.3rem 1.8rem;
  }

  @media (max-width: 768px) {
    margin: 3.3rem 1.1rem;
  }

  @media (max-width: 586px) {
    margin: 2.6rem 0.8rem;
  }
`;

export const TextBox = styled.div`
  text-align: center;
`;

export const Text = styled.div`
  font-size: 1.34rem;
  opacity: 0.8;
  line-height: 1.63;
  letter-spacing: 1.63px;
  font-weight: 700;
  text-transform: uppercase;
  color: currentColor;
  margin-bottom: 40px;

  text-transform: uppercase !important;
`;

export const BoxOverlay = styled.div`
  &::before {
    position: absolute;
    top: 0px;
    content: "";
    width: 100%;
    height: 120%;
    background: url(/static/hero-pattern-2-37d657c….webp) center top / cover
      no-repeat;
    z-index: -1;
  }
`;
