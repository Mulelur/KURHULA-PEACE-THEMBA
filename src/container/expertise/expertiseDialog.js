import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Button, ClearButton } from "../../components/buttons";
import { Expertise } from "../../components";
import TimeIcon from "../../components/svg/Time";
import SmTime from "../../components/svg/SMTime";

import Intros from "../Intros";

import { projectsPage } from "../../config/config";
import DataSVG from "../../components/svg/Data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ExpertiseDialog() {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClose = (id) => {
    setDialog({ id, open: false });
  };

  const handleClickOpen = (id) => {
    setDialog({ id, open: true });
  };

  const getOpen = () => {
    return dialogs.find((item) => item.name === "Expertise").open;
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={getOpen()}
        onClose={() => handleClose(2)}
        TransitionComponent={Transition}
      >
        <>
          <ClearButton onClick={() => handleClose(2)}>
            <CloseIcon fontSize="large" />
          </ClearButton>
          <Expertise>
            <Intros.Intro3 />
            <Expertise.Box>
              <Expertise.ContainerFluid>
                <Expertise.MasonryGrid>
                  {projectsPage.projects.map((item, index) => {
                    return (
                      <>
                        <Expertise.Col key={index}>
                          <Expertise.ScreenBox>
                            <Expertise.Link href={item.link}>
                              <Expertise.Img
                                alt="img"
                                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                              />
                            </Expertise.Link>
                            <Expertise.TextBox>
                              <Expertise.TextBoxText>
                                {item.module}
                              </Expertise.TextBoxText>
                              <Expertise.TextBoxTitle>
                                {item.title}
                              </Expertise.TextBoxTitle>
                            </Expertise.TextBox>
                          </Expertise.ScreenBox>
                        </Expertise.Col>
                      </>
                    );
                  })}
                </Expertise.MasonryGrid>
              </Expertise.ContainerFluid>
            </Expertise.Box>
            {/* <Expertise.Floating /> */}
            <Expertise.Floating2 />
            <Expertise.Box>
              <Expertise.Container>
                <Expertise.Content>
                  <Expertise.Heading2>
                    High school subjects and Varsity modules
                  </Expertise.Heading2>
                  <Expertise.Subjects>
                    <Expertise.Group>
                      <Expertise.Title>High School Subjects</Expertise.Title>
                      <Expertise.List>
                        {projectsPage.highSchoolSubjects.map((item) => {
                          return (
                            <Expertise.ListItem>{item}</Expertise.ListItem>
                          );
                        })}
                      </Expertise.List>
                    </Expertise.Group>
                    <Expertise.Group>
                      <Expertise.Title>Modules</Expertise.Title>
                      <Expertise.List>
                        {projectsPage.modules.map((item) => {
                          return (
                            <Expertise.ListItem>{item}</Expertise.ListItem>
                          );
                        })}
                      </Expertise.List>
                    </Expertise.Group>
                  </Expertise.Subjects>
                </Expertise.Content>
              </Expertise.Container>
              <Expertise.Floating>
                <DataSVG />
              </Expertise.Floating>
            </Expertise.Box>
            <Expertise.Box>
              <Expertise.Container>
                <Expertise.Content>
                  <Expertise.Heading2>Management Matrix</Expertise.Heading2>
                  <Expertise.MML>
                    <TimeIcon />
                  </Expertise.MML>
                  <Expertise.MMS>
                    <SmTime />
                  </Expertise.MMS>
                </Expertise.Content>
              </Expertise.Container>
            </Expertise.Box>
            <Expertise.Box>
              <Expertise.Content>
                <Expertise.Column>
                  <Expertise.Project>
                    <Expertise.ProjectDot />
                    <Expertise.ProjectTitle>
                      AVAILABLE FOR FREELANCE PROJECTS
                    </Expertise.ProjectTitle>
                  </Expertise.Project>
                  <Expertise.Heading2>
                    Do you have illustration project? Let's talk.
                  </Expertise.Heading2>
                  <Expertise.ButtonContainer>
                    <Button onClick={() => handleClickOpen(4)}>
                      Let's Talk Now
                    </Button>
                  </Expertise.ButtonContainer>
                </Expertise.Column>
              </Expertise.Content>
            </Expertise.Box>
          </Expertise>
        </>
      </Dialog>
    </div>
  );
}
