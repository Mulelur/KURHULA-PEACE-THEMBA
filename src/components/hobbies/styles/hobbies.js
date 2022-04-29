import styled from "styled-components/macro";

export const Main = styled.main`
  background-color: #fff;
`;

export const Container = styled.div`
  margin: 2rem 10rem;
  transition: all 0.5s;
  @media (max-width: 800px) {
    margin: 5rem 7.5rem;
  }
  @media (max-width: 725px) {
    margin: 5rem 7.5rem;
  }
  @media (max-width: 500px) {
    margin: 1.8rem 2.5rem;
  }
`;
export const Box = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  // @media screen and (min-width: 992px) {
  //   padding-top: 55px;
  //   padding-bottom: 55px;
  // }

  // @media screen and (min-width: 768px) {
  //   padding-top: 25px;
  //   padding-bottom: 25px;
  // }

  box-sizing: border-box;
  background-color: rgb(22, 28, 45);
  min-width: 0px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Col = styled.div`
  margin-bottom: 4.3rem;

  flex: 0 0 100%;
  max-width: 100%;

  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 1.8rem;
  padding: 2.3rem;
  transition: all 0.5s;

  @media (max-width: 1450px) {
    &:nth-child(1) {
      padding-bottom: 45rem !important;
    }
  }

  @media (max-width: 1150px) {
    &:nth-child(1) {
      padding-bottom: 35rem !important;
    }
  }

  @media (max-width: 856px) {
    &:nth-child(1) {
      padding-bottom: 20rem !important;
    }
  }

  @media (max-width: 586px) {
    &:nth-child(1) {
      padding-bottom: 10rem !important;
    }
  }

  &:nth-child(1) {
    padding-bottom: 63rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 0px;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: -0.2px;
  line-height: 1.71;
  color: rgba(22, 28, 45, 0.7);
`;

export const Heading2 = styled.h2`
  @media (min-width: 992px) {
    font-size: 60px;
    line-height: 70px;
  }

  @media (min-width: 576px) {
    font-size: 50px;
    line-height: 62px;
  }

  font-weight: 700;
  padding: 2.3rem;
  max-width: 73rem;
  text-align: center;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 0px;
  color: rgb(22, 28, 45);
  color: ${(props) => props.color};
`;

export const Img = styled.div`
  width: 100%;
  max-width: 109rem;
  height: 56rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  @media (max-width: 1150px) {
  }
`;

export const MbCol = styled.div`
  margin-bottom 30px;
  padding-right: 3rem;

  @media (min-width: 582px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Heading4 = styled.h4`
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1;
  font-size: 2.4rem;
  color: rgb(22, 28, 45);

  margin-bottom: 2.5rem !important;

  @media (max-width: 992px) {
    font-size: 2rem;
  }
`;

export const PortfolioDetails = styled.div`
  margin-top: -40%;

  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
