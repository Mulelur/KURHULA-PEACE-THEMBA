import styled from "styled-components";

export const Section = styled.section``;

export const Main = styled.main`
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  color: #fff;

  @media (min-width: 992px) {
    max-width: 960px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Box = styled.div`
  @media screen and (max-width: 992px) {
    padding-top: 55px;
    padding-bottom: 55px;

    &:nth-child(1) {
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 25px;
    padding-bottom: 25px;

    &:nth-child(1) {
      padding-bottom: 0;
    }
  }

  box-sizing: border-box;
  min-width: 0px;
  padding-top: 50px;
  padding-bottom: 50px;

  &:nth-child(1) {
    padding-bottom: 0;
  }
`;

export const Heading4 = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;

  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1;
  color: rgb(255, 255, 255);
  text-transform: uppercase !important;
`;

export const Heading2 = styled.h2`
  font-weight: 700;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 54px;
  margin-bottom: 0px;
  color: rgb(255, 255, 255);

  @media (max-width: 576px) {
    font-size: 34px;
    line-height: 36px;
  }
`;

export const Download = styled.a`
  width: 15rem;
  height: 5.4rem;
  background-color: transparent;
  text-align: center;
  border-radius: 5rem;
  text-decoration: none;
  border: 3px solid #ffff;
  padding-top: 1.4rem;
  color: #ffff;
  font-size: 1.6rem;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &: hover {
    background-color: #ffff;
    color: black;
  }
`;

export const ImageMain = styled.div`
  text-align: center !important;
  padding: 8rem;
  max-width: 720px;

  @media screen and (max-width: 568px) {
    padding: 2rem;
  }
`;

export const Image = styled.img`
  border-radius: 7rem;
  transition: all 0.4s ease 0s;
  max-width: 100%;
  height: auto;
  padding-top: 1.6rem;

  &:hover {
    transform: scale(0.8) rotate(-16deg);
    box-shadow: rgb(68 77 136 / 20%) 0px 32px 74px;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  width: 48rem;
  text-align: center;
  margin-bottom: 1.4rem;
  line-height: 1.5;
  padding-bottom: 3rem;

  @media screen and (max-width: 586px) {
    width: 34rem;
  }
`;

export const BoxContainer = styled.div`
  @media screen and (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  box-sizing: border-box;
  min-width: 0px;
  padding-top: 50px;
  padding-bottom: 50px;

  position: relative !important;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media screen and (min-width: 768px) {
    margin-top: 4rem;
  }
`;

export const Link = styled.a`
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.75rem 0px;
  font-size: 1.5rem;
  line-height: 1.63;
  letter-spacing: 1.63px;
  transition: all 0.4s ease 0s;
  color: rgb(73, 95, 239) !important;

  &:hover {
    transform: translateY(-10px);
  }

  &:hover {
    text-decoration: none !important;
    outline: none !important;
    color: rgb(73, 95, 239) !important;
  }

  @media screen and (max-width: 568px) {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

export const Divider = styled.span`
  padding: 0.75rem 0.4rem;
  opacity: 0.25;
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 1.8rem;

  @media (min-width: 992px) {
    margin-left: 1.5rem !important;
  }

  @media (min-width: 992px) {
    margin-right: 1.5rem !important;
  }
  display: block !important;
`;
