import styled from "styled-components";
import { primaryColor } from "../../../colors/colors";

export const CvButton = styled.a`
  background-color: ${primaryColor};
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
  // background-color: rgb(86, 179, 129);ß
  background-color: rgb(73, 95, 239);

  transition: all 0.4s ease-out 0s;
  outline: none !important;

  & :not(:disabled) {
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: rgb(3 3 3 / 14%) 0px 32px 54px;
  }
`;

export const LatterButton = styled.a``;

export const Close = styled.div`
  position: absolute;

  top: 2rem;
  right: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14);
`;

export const ButtonLink = styled.a`
  &:hover {
    transform: translateY(-10px);
  }

  font-size: 1.9rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.75rem 0px;
  line-height: 1.63;
  letter-spacing: 1.63px;
  transition: all 0.4s ease 0s;
  color: #161c2d !important;
  text-decoration: underline;
`;
