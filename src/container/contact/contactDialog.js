import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Dialog from "@mui/material/Dialog";

import axios from "axios";
import Zoom from "@mui/material/Zoom";
import CloseIcon from "@mui/icons-material/Close";
import { Contact } from "../../components";
import { ClearButton } from "../../components/buttons";

import { user } from "../../config/config";
import FooterContainer from "../footer";
import Intros from "../Intros";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function ContactDialog() {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClose = (id) => {
    setDialog({ id, open: false });
  };

  const getOpen = () => {
    return dialogs.find((item) => item.name === "Contact").open;
  };

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    } else if (e.target.name === "subject") {
      setSubject(e.target.value);
    }
  };

  const projectId = 1;

  const requestPayload = {
    data: {
      name,
      email,
      message,
      subject,
      projectId,
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message, subject);
    axios
      .post("http://localhost:1337/api/in-boxes", requestPayload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={getOpen()}
        onClose={() => handleClose(4)}
        TransitionComponent={Transition}
      >
        <Intros.Intro4 />
        <ClearButton onClick={() => handleClose(4)}>
          <CloseIcon fontSize="large" />
        </ClearButton>
        <Contact>
          <Contact.Box>
            <Contact.Container>
              <Contact.Content>
                <Contact.Col>
                  <Contact.Heading1>Contact now</Contact.Heading1>
                  <Contact.Text>
                    Have a project or question? Send me a message. I will reply
                    within 48 hours.
                  </Contact.Text>
                  <Contact.Form
                    onSubmit={(e) => {
                      onSubmit(e);
                    }}
                  >
                    <Contact.FormGroup>
                      <Contact.Input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="name"
                        placeholder="Name"
                      />
                    </Contact.FormGroup>
                    <Contact.FormGroup>
                      <Contact.Input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="email"
                        placeholder="Email address"
                      />
                    </Contact.FormGroup>
                    <Contact.FormGroup>
                      <Contact.Input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="subject"
                        placeholder="Subject"
                      />
                    </Contact.FormGroup>
                    <Contact.FormGroup>
                      <Contact.TextArea
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="message"
                        placeholder="write your message here"
                      />
                    </Contact.FormGroup>
                    <Contact.FormGroup>
                      <Contact.Button>
                        Send{" "}
                        <svg
                          id="SVGDoc"
                          width="18"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="0 0 18 12"
                          class="Button___StyledSvg-w61ggs-1 kJIzYi"
                        >
                          <defs></defs>
                          <desc>Generated with Avocode.</desc>
                          <g>
                            <g>
                              <title>tail-right</title>
                              <g>
                                <title>Path</title>
                                <path
                                  d="M1,5.5h16"
                                  fill-opacity="0"
                                  fill="#ffffff"
                                  stroke-linejoin="round"
                                  stroke-linecap="round"
                                  stroke-opacity="1"
                                  stroke="#ffffff"
                                  stroke-miterlimit="20"
                                  stroke-width="2"
                                ></path>
                              </g>
                              <g>
                                <title>Path</title>
                                <path
                                  d="M12,1v0l5,5v0l-5,5v0"
                                  fill-opacity="0"
                                  fill="#ffffff"
                                  stroke-linejoin="round"
                                  stroke-linecap="round"
                                  stroke-opacity="1"
                                  stroke="#ffffff"
                                  stroke-miterlimit="20"
                                  stroke-width="2"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </Contact.Button>
                    </Contact.FormGroup>
                  </Contact.Form>
                </Contact.Col>
                <Contact.Col>
                  <Contact.ContactCard>
                    <Contact.ContactCardItem>
                      <Contact.ContactCardText>
                        Email me at
                      </Contact.ContactCardText>
                      <Contact.ContactCardLink href="mailto:hello@folio.com">
                        {user.email}
                      </Contact.ContactCardLink>
                    </Contact.ContactCardItem>
                    <Contact.ContactCardItem style={{ marginTop: "3rem" }}>
                      <Contact.ContactCardText>
                        Call me ats
                      </Contact.ContactCardText>
                      <Contact.ContactCardLink href="tel:+1-402-4983">
                        {user.phoneNumber}
                      </Contact.ContactCardLink>
                    </Contact.ContactCardItem>
                  </Contact.ContactCard>
                </Contact.Col>
              </Contact.Content>
            </Contact.Container>
          </Contact.Box>
        </Contact>
        <FooterContainer />
      </Dialog>
    </div>
  );
}
