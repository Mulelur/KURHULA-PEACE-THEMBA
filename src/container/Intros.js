import * as React from "react";
import { Intros } from "../components";
import { aboutPage, hobbiesPage, projectsPage } from "../config/config";

function Intro1() {
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>🏀 hobbies and interests.</Intros.Text>
              <Intros.Heading2>{hobbiesPage.intro}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

function Intro3() {
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>👋 FROM SOUTH AFRICA</Intros.Text>
              <Intros.Heading2>{projectsPage.intro}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

function Intro4() {
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>Contact Me</Intros.Text>
              <Intros.Heading2>
                “A positive mindset brings positive things.”
              </Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}
function Intro2() {
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>About Me </Intros.Text>
              <Intros.Heading2>{aboutPage.intro}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { Intro1, Intro2, Intro3, Intro4 };
