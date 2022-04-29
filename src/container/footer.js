import React from "react";
import { Footer } from "../components";

import { user } from "../config/config";

export default function FooterContainer({ color }) {
  return (
    <Footer color={color}>
      <Footer.Box>
        <Footer.Container>
          <Footer.Content>
            <Footer.Tex>
              2022 © {user.name}. Design by Weblinnk with ❤️
            </Footer.Tex>
          </Footer.Content>
        </Footer.Container>
      </Footer.Box>
    </Footer>
  );
}
