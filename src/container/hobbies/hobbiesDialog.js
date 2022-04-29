import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Fade from "@mui/material/Fade";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { Hobbies } from "../../components";
import Intros from "../Intros";
import { ClearButton } from "../../components/buttons";
import FooterContainer from "../footer";

import { hobbiesPage } from "../../config/config";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

export default function HobbiesDialog() {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClose = (id) => {
    setDialog({ id, open: false });
  };

  const getOpen = () => {
    return dialogs.find((item) => item.name === "Hobbies").open;
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={getOpen()}
        onClose={() => handleClose(3)}
        TransitionComponent={Transition}
      >
        <ClearButton onClick={() => handleClose(3)}>
          <CloseIcon fontSize="large" />
        </ClearButton>
        <Intros.Intro1 />
        <Hobbies>
          <Hobbies.Container>
            {hobbiesPage.topImgs.map((item, index) => {
              return (
                <>
                  <Hobbies.Col key={index}>
                    <Hobbies.Img src={item.url} />
                  </Hobbies.Col>
                </>
              );
            })}
          </Hobbies.Container>

          <Hobbies.Container>
            <Hobbies.Content>
              <Hobbies.Row>
                {hobbiesPage.hobbies.map((item, idx) => (
                  <>
                    <Hobbies.MbCol key={idx}>
                      <Hobbies.Heading4>{item.title}</Hobbies.Heading4>
                      <Hobbies.Text>{item.desc}</Hobbies.Text>
                    </Hobbies.MbCol>
                  </>
                ))}
              </Hobbies.Row>
            </Hobbies.Content>
          </Hobbies.Container>
          <Hobbies.Box>
            <Hobbies.Container>
              <Hobbies.PortfolioDetails>
                {hobbiesPage.bottomImgs.map((item, index) => {
                  return (
                    <>
                      <Hobbies.Col key={index}>
                        <Hobbies.Img src={item.url} />
                      </Hobbies.Col>
                    </>
                  );
                })}
              </Hobbies.PortfolioDetails>
            </Hobbies.Container>
          </Hobbies.Box>
          <Hobbies.Box>
            <Hobbies.Col>
              <Hobbies.Heading2 color="#fff">
                Your session has timed out. Please click here to resume your
                session.
              </Hobbies.Heading2>
            </Hobbies.Col>
          </Hobbies.Box>
        </Hobbies>

        <FooterContainer />
      </Dialog>
    </div>
  );
}
