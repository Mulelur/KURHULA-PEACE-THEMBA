import React from "react";
import ContactContainer from "../container/contact/contactDialog";
import FooterContainer from "../container/footer";
import HeaderContainer from "../container/header";
import NavBarContainer from "../container/navBar";

export default function Contact() {
  return (
    <>
      <NavBarContainer />
      <HeaderContainer>Contact Me</HeaderContainer>
      <ContactContainer />
      <FooterContainer />
    </>
  );
}
