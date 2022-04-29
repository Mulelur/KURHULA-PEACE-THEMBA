import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 1rem;
  margin: -1rem 0;
`;

export const Main = styled.main`
  background-color: #161c2d;
  height: 100%;
`;

export const Box = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 992px) {
    max-width: 980px;
    padding: 24rem 0;
  }

  // @media screen and (min-width: 768px) {
  //   max-width: 720px;
  // }

  // @media screen and (min-width: 576px) {
  //   max-width: 540px;
  // } ;
`;

export const Content = styled.div`
  display: flex;

  @media screen and (max-width: 586px) {
    flex-direction: column;
  }
`;

export const Heading1 = styled.h2`
  @media (min-width: 992px) {
    font-size: 3rem;
    line-height: 1.25;
  }

  font-weight: 700;
  letter-spacing: -1.15px;
  font-size: 2.125rem;
  line-height: 1.115;
  color: rgb(255, 255, 255);
  margin-bottom: 2rem;
`;

export const Form = styled.form``;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 0px;
  position: relative;
  background-color: transparent;
  padding: 0.5rem 0.75rem 0.5rem 8px;
  height: 5rem;
  outline: 0;

  transition: all 0.4s ease 0s;

  &:focus {
    color: rgba(255, 255, 255, 0.5);
    box-shadow: none;
    border-bottom: 1px solid rgb(73, 95, 239);
    background-color: #161c2d;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;

  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-radius: 0px;
  position: relative;
  padding: 0.5rem 0.75rem 0.5rem 0px;

  overflow: auto;
  resize: vertical;

  outline: 0;
  height: 86px;

  margin: 0;
  font-family: inherit;
`;

export const FormGroup = styled.div`
  margin-top: 1.5rem !important;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  margin: 4rem;
`;

export const Title = styled.h2`
  padding: 1.5rem;
  font-size: 2rem;
`;

export const Text = styled.p`
  font-size: 21px;
  font-weight: 400;
  letter-spacing: -0.66px;
  line-height: 38px;
  color: rgb(255, 255, 255);
  margin-bottom: 2.75rem;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 725px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const IconsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  text-align: center;
  @media (max-width: 725px) {
    margin-top: 2rem;
  }
`;

export const IconsTitle = styled.h3`
  padding: 0.5rem;
  font-size: 1.2rem;
`;

export const IconsText = styled.p``;

export const Icon = styled.img`
  padding-bottom: 1.2rem;
`;

export const Button = styled.button`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.63px;
  text-transform: uppercase;
  padding: 23px 30px;
  box-shadow: rgb(3 3 3 / 12%) 0px 32px 54px;
  border-radius: 50rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  user-select: none;
  transform: perspective(1px) translateZ(0px);
  position: relative;
  overflow: hidden;
  border: none;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  background-color: rgb(73, 95, 239);
  transition: all 0.4s ease-out 0s;
  outline: none !important;

  &:hover {
    transform: translateY(-10px);
    box-shadow: rgb(3 3 3 / 14%) 0px 32px 54px;
  }
`;

export const ContactCard = styled.div`
  @media (min-width: 992px) {
    margin-top: 250px;
  }

  @media (min-width: 992px) {
    margin-left: 3rem !important;
  }

  padding: 3rem !important;

  border-radius: 10px;
  background-color: rgba(73, 95, 239, 0.1);
  margin-top: 3rem;
`;

export const ContactCardItem = styled.div``;

export const ContactCardLink = styled.a`
  font-size: 1.8rem;
  transition: all 0.3s ease-out 0s;

  font-weight: 700 !important;
  text-decoration: none;
  background-color: transparent;

  color: rgb(73, 95, 239);
`;

export const ContactCardText = styled.p`
  margin-bottom: 0px;
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.66px;
  line-height: 38px;
  color: rgb(255, 255, 255);
  margin-top: 0;
`;
