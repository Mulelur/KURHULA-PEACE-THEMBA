import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";
import { primaryColor, textColor } from "../../../colors/colors";

export const Container = styled.div`
  // display: flex;
  // position: relative;
  // align-items: center;
  // justify-content: space-between;
  // width: 100%;
  // height: 4.7rem;
  // background-color: ${primaryColor};
  // color: ${textColor};

  padding: 0px;
  padding: 1.8rem;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1;
  background-color: transparent;

  @media (min-width: 992px) {
    transition: all 0.4s ease 0s;
    position: fixed !important;
  }

  ${(props) =>
    props.scrolling &&
    `
         transform: translateY(-100%);
         transition: all 0.4s ease 0s;
       `}

  ${(props) =>
    props.showMenu &&
    `
    transform: translateY(0%);
    box-shadow: rgb(65 62 101 / 10%) 0px 12px 34px -11px;
    z-index: 9999;
    background: #161C2D;`}
`;

export const Nav = styled.nav`
  background-color: transparent;
  border-radius: 0px;
  z-index: 999;
  margin-bottom: 0px;
  transition: all 0.5s ease-in-out;
  color: #fff;
`;

export const NavLink = styled(ReachRouterLink)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;

  margin-right: auto;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  transition: all 0.5s ease-in-out;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  padding: 1rem;
  text-transform: capitalize;
  transition: all 0.4s ease 0s;
  align-items: center;
  display: inline-flex;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 24px;
  text-transform: lowercase;
  color: rgb(255, 255, 255) !important;
  padding: 18px !important;
`;

export const Image = styled.img``;

export const DropDown = styled.div`
  position: absolute;
  top: 4rem;
  right: 2rem;
  background-color: #33312e;
  width: 14rem;
  box-shadow: 0 1px 3px 0 rgba(6, 24, 44, 0.4);
`;

export const Menu = styled.div`
  padding: 1.4rem;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

export const Logo = styled.h3`
  margin-left: 1rem;
`;
