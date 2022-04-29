import React from "react";
import { NavBar } from "../components";
import ExpertiseContainer from "../container/expertise/expertise";
import FooterContainer from "../container/footer";
import HeaderContainer from "../container/header";
import NavBarContainer from "../container/navBar";

export default function Expertise() {
  return (
    <>
      <NavBarContainer />
      <HeaderContainer>what do i do!</HeaderContainer>
      <ExpertiseContainer />
      <FooterContainer />
    </>
  );
}
