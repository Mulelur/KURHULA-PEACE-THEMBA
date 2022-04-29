import styled from "styled-components/macro";

export const Section = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  @media (min-width: 992px) {
    max-width: 1150px;
  }
  // @media (min-width: 768px) {
  //   max-width: 720px;
  // }
  // @media (min-width: 576px) {
  //   max-width: 540px;
  // }
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 65rem;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding: 0 2.5rem;

  @media (max-width: 120px) {
    padding: 0 6.6rem;
  }

  @media (max-width: 568px) {
    padding: 0 1.4rem;
  }
`;

export const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 540px;
  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Img = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

export const Heading2 = styled.h2`
  font-weight: 700;
  margin-bottom: 0.9rem;
  padding-top: 2.3rem;
  letter-spacing: 1.5px;
  font-size: 2.125rem;

  line-height: 1.5;
  color: rgb(255, 255, 255);

  @media (min-width: 992px) {
    font-size: 3rem;
    line-height: 1.25;
  }

  @media (min-width: 576px) {
    font-size: 2.5rem;
    line-height: 1.225;
    letter-spacing: -1.8px;
  }
`;

export const Heading1 = styled.h1`
  font-size: 66px;
  line-height: 70px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  letter-spacing: -2.81px;
`;

export const Heading4 = styled.h4`
  margin-top: 1.9rem;
  margin-bottom: 1.2rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.6rem;
`;

export const Text = styled.p`
  margin-bottom: 0px;
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.66px;
  color: rgb(255, 255, 255);
  line-height: 1.5;

  @media (min-width: 992px) {
    margin-top: 2.6rem !important;
    margin-bottom: 1.9rem !important;
  }
`;

export const TextArea = styled.p`
  color: #6c757d;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Buttons = styled.div`
  margin-bottom: 5rem;
  padding: 1rem;
  display: flex;

  @media (max-width: 400px) {
    margin: 2%;
    margin-bottom: 5%;

    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  @media screen and (max-width: 992px) {
    padding-top: 55px;
    padding-bottom: 55px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  box-sizing: border-box;
  min-width: 0px;
  background-color: #161c2d;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const List = styled.ul`
  margin-top: 0.9rem;
  list-style-type: none;
  color: #fff;
`;

export const ListItem = styled.li`
  padding: 1rem 1.1rem;
`;

export const ListTitle = styled.span`
  display: inline-block;
  font-size: 1.9rem;
  font-weight: 700;
`;

export const ListText = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-left: 3.5rem;
  position: relative;

  & :before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 2.3rem;
    height: 2.3rem;
    background-color: #fff;
    margin-right: 10px;
    top: 16px;
    left: 0;
    position: absolute;
  }

  & :after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    border: 1px solid #fff;
    top: 13.5px;

    left: -2.5px;
    position: absolute;

    &: hover {
      border: 2.5px;
    }
  }
`;

export const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0.8rem;
`;

export const Btn = styled.div`
  padding: 0.8rem;
  margin-bottom: 1.5rem;
`;
