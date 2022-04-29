import React from "react";
import AboutMeContainer from "../container/aboutMe/aboutMeDialog";
import FooterContainer from "../container/footer";
import HeaderContainer from "../container/header";
import NavBarContainer from "../container/navBar";

export default function AboutMe() {
  return (
    <>
      <NavBarContainer />
      <HeaderContainer>About me</HeaderContainer>
      <AboutMeContainer />
      <FooterContainer />
    </>
  );
}
