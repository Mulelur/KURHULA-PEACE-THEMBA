import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { AboutMe } from "../../components";
import { Button, ClearButton } from "../../components/buttons";
import Intros from "../Intros";
import FooterContainer from "../footer";
import { ButtonLink } from "../../components/buttons/styles/button";

import { aboutPage } from "../../config/config";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function AboutMeDialog() {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClose = (id) => {
    setDialog({ id, open: false });
  };

  const getOpen = () => {
    return dialogs.find((item) => item.name === "About Me").open;
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={getOpen()}
        onClose={() => handleClose(1)}
        TransitionComponent={Transition}
      >
        <>
          <ClearButton onClick={() => handleClose(1)}>
            <CloseIcon fontSize="large" />
          </ClearButton>
          <Intros.Intro2 />
          <AboutMe>
            <AboutMe.Box>
              <AboutMe.Container>
                <AboutMe.Content>
                  <AboutMe.Column>
                    <div>
                      <AboutMe.Image src={aboutPage.profile.url} />
                    </div>
                  </AboutMe.Column>
                  <AboutMe.Column>
                    <AboutMe.TextArea>
                      <AboutMe.Heading2>{aboutPage.names}</AboutMe.Heading2>
                      <AboutMe.Text>{aboutPage.summary}</AboutMe.Text>
                      <AboutMe.Heading2>Learning styles</AboutMe.Heading2>
                      <AboutMe.List>
                        {aboutPage.LearningStyles.map((item, index) => {
                          return (
                            <>
                              <AboutMe.ListItem>
                                <AboutMe.ListTitle>
                                  {item.title}
                                </AboutMe.ListTitle>
                                <AboutMe.ListText>{item.desc}</AboutMe.ListText>
                              </AboutMe.ListItem>
                            </>
                          );
                        })}
                      </AboutMe.List>
                      <AboutMe.Buttons>
                        {aboutPage.links.map((item, idx) => {
                          return (
                            <>
                              <AboutMe.Btn>
                                <Button key={idx} href={item.url}>
                                  {item.title}
                                </Button>
                              </AboutMe.Btn>
                            </>
                          );
                        })}
                      </AboutMe.Buttons>
                    </AboutMe.TextArea>
                  </AboutMe.Column>
                </AboutMe.Content>
              </AboutMe.Container>
            </AboutMe.Box>
            <AboutMe.Box>
              <AboutMe.Container>
                <AboutMe.TextCenter>
                  <AboutMe.TextCenter>
                    <AboutMe.Heading1>Ready to talk?</AboutMe.Heading1>
                  </AboutMe.TextCenter>
                  <AboutMe.TextCenter>
                    <ButtonLink>Let's Talk Now</ButtonLink>
                  </AboutMe.TextCenter>
                </AboutMe.TextCenter>
              </AboutMe.Container>
            </AboutMe.Box>
          </AboutMe>
          <FooterContainer color="rgb(22, 28, 45)" />{" "}
        </>
      </Dialog>
    </div>
  );
}
