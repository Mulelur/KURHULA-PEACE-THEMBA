import React from "react";
import { useStoreActions } from "easy-peasy";
import { Home } from "../../components";
import { Button } from "../../components/buttons";

import { homePage } from "../../config/config";

export default function SectionHeaderContainer() {
  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClickOpen = (id) => {
    setDialog({ id, open: true });
  };

  return (
    <Home>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.ImageMain>
              <Home.Image
                src={homePage.profile.url}
                alt={homePage.profile.name}
              />
            </Home.ImageMain>
            <Home.Heading4>Hello Welcome</Home.Heading4>
            <Home.Heading2>{homePage.intro}</Home.Heading2>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Text>{homePage.quote}</Home.Text>
            <Button onClick={() => handleClickOpen(1)}>Explore more...</Button>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Heading2>{homePage.text}</Home.Heading2>
            <Home.Links>
              <Home.Link>CONTACT@FOLIO.DESIGN</Home.Link>
              <Home.Divider>|</Home.Divider>
              <Home.Link>LINKEDIN.COM/FOLIO</Home.Link>
            </Home.Links>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Heading4>© 2020 ALL RIGHT RESEVED</Home.Heading4>
          </Home.Content>
        </Home.Container>
      </Home.Box>
    </Home>
  );
}
