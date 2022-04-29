import React from "react";
import { Header } from "../components";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Title>
        <Header.Text>{children}</Header.Text>
      </Header.Title>
    </Header>
  );
}
