import React from "react";
import FooterContainer from "../container/footer";
import HeaderContainer from "../container/header";
import HobbiesContainer from "../container/hobbies/hobbies";
import NavBarContainer from "../container/navBar";

export default function Hobbies() {
  return (
    <>
      <NavBarContainer />
      <HeaderContainer>Hobbies</HeaderContainer>
      <HobbiesContainer />
      <FooterContainer />
    </>
  );
}
