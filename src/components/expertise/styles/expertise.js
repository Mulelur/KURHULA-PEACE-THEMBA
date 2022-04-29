import styled from "styled-components/macro";

export const Main = styled.main`
  background-color: #161c2d;
  color: #fff;
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

  position: relative;
  box-sizing: border-box;
  min-width: 0px;
  padding-top: 50px;
  padding-bottom: 50px;
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
  color: currentColor;
`;

export const ButtonContainer = styled.div`
  text-align: center !important;
`;

export const Heading4 = styled.h4``;

export const Content = styled.div`
  margin: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Column = styled.div``;

export const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectDot = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  margin-right: 13px;
  border-radius: 50%;
  width: 12px;
  height: 12px;

  background-color: rgb(73, 95, 239) !important;
`;

export const ProjectTitle = styled.p`
  margin-bottom: 0px;
  font-size: 1.3rem;
  line-height: 1.63;
  letter-spacing: 1.63px;
  font-weight: 700;
  text-transform: uppercase;
  color: currentColor;

  text-transform: uppercase !important;
  text-align: center !important;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  margin: 2rem;
  text-align: center;
`;

export const MMTitle = styled.h2`
  font-size: 2.6rem;
  margin: 4.4rem;
  text-align: center;
`;

export const MMS = styled.div`
  margin: 2.5rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 6px;
  display: none;

  @media (max-width: 930px) {
    display: block;
  }
`;

export const MML = styled.div`
  margin: 2.5rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 6px;
  display: none;

  @media (min-width: 930px) {
    display: block;
  }
`;

export const MMBedge = styled.div`
  width: 12rem;
  height: 2.8rem;
  border-radius: 0.5rem;
  color: #ffffff;
  padding: 0.8rem;
  background-color: #e65f78;
  padding-left: 2rem;
  font-size: 1.2rem;
  font-weight: 700;

  margin-bottom: 2rem;
`;

export const MMContent = styled.div``;

export const MMText = styled.p`
  margin: 1.6rem;
  font-size: 1.4rem;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  text-transform: capitalize;
`;

export const List = styled.ul`
  list-style: none;
  margin: 1rem;
  width: 35rem;
`;

export const ListItem = styled.li`
  font-size: 1.3rem;
  text-transform: capitalize;
  padding: 2rem;
  margin: 1.5rem 0;
  padding: 2.3rem;
  background-color: #f5f5f5;
  color: #000000;
  @media (max-width: 856px) {
    width: 100%;
  }
  transition: all 0.5s;
  box-shadow: 0 0 1px 0 rgba(6, 24, 44, 0.18), 0 1px 2px 0 rgba(6, 24, 44, 0.2);
  &:hover {
    box-shadow: 0 13px 27px -5px rgb(0 0 0 / 12%), 0 8px 16px -8px #f5f5f5a6,
      0 -6px 16px -6px rgb(0 0 0 / 3%);
  }
`;

export const Subjects = styled.div`
  align-items: center;
  justify-content: center;
  padding: 2rem;
  display: flex;
  @media (max-width: 856px) {
    flex-direction: column;
    margin: 0 2rem;
  }
  margin-top: 4rem;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0 5rem;
`;

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const MasonryGrid = styled.div`
  position: relative;
  height: 23rem;

  display: flex;
  justify-content: center;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  @media (min-width: 992px) .col-lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  @media (min-width: 768px) .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 576px) .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  position: relative;
  padding-right: 15px;
  padding-left: 15px;
`;

export const TextBox = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  position: absolute;
  overflow: hidden;
  bottom: 0px;
  left: 20px;
  right: 20px;
  opacity: 0;
  border-radius: 8px;
  z-index: 1;
  padding: 1.25rem 1.875rem;
  transition: all 0.4s ease 0s;

  &::before {
    position: absolute;
    content: "";
    background: rgb(255, 255, 255);
    inset: 0px;
    z-index: -1;
    opacity: 0.9;
  }
`;

export const ScreenBox = styled.div`
  width: 34rem;
  height: 20rem;

  box-sizing: border-box;
  min-width: 0px;
  margin-bottom: 30px;
  position: relative !important;
  &:hover ${TextBox} {
    bottom: 20px;
    opacity: 1;
  }
`;

export const Link = styled.a`
  transition: all 0.3s ease-out 0s;
  color: rgb(22, 28, 45) !important;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none !important;
    outline: none !important;
    color: rgb(73, 95, 239) !important;
  }
`;

export const TextBoxTitle = styled.h4`
  font-size: 1.3125rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1;
  color: rgb(22, 28, 45);
`;

export const TextBoxText = styled.p`
  font-size: 0.8125rem;
  line-height: 1.63;
  letter-spacing: 1.63px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(22, 28, 45);
  margin-bottom: 8px;
`;

export const Img = styled.div`
  border-radius: 8px;
  width: 34rem;
  height: 26rem;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;

// a div that has a floating effect
export const Floating = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #7eceed;
  box-shadow: 0 0 1px 0 rgba(6, 24, 44, 0.18), 0 1px 2px 0 rgba(6, 24, 44, 0.2);
  animation: floating 8s ease-in-out infinite;
  left: 1rem;
  bottom: 4rem;
  z-index: 1;

  display: none;

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  transform-origin: 50% 100%;

  @media (max-width: 586px) {
    display: block;
  }
`;

export const Floating2 = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #fec619;
  box-shadow: 0 0 1px 0 rgba(6, 24, 44, 0.18), 0 1px 2px 0 rgba(6, 24, 44, 0.2);
  animation: floating2 11s ease-in-out infinite;
  top: 19rem;
  left: 36rem;
  z-index: 1;

  @media (max-width: 880px) {
    top: 23rem;
  }

  @keyframes floating2 {
    0% {
      transform: translateY(0x);
    }
    50% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  transform-origin: 50% 100%;
`;
