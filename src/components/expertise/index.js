import React from "react";
import * as EX from "./styles/expertise";

export default function Expertise({ children, ...restProps }) {
  return <EX.Main {...restProps}>{children}</EX.Main>;
}

Expertise.Container = function ExpertiseContent({ children, ...restProps }) {
  return <EX.Container {...restProps}>{children}</EX.Container>;
};

Expertise.Content = function ExpertiseContent({ children, ...restProps }) {
  return <EX.Content {...restProps}>{children}</EX.Content>;
};

Expertise.Text = function ExpertiseText({ children, ...restProps }) {
  return <EX.Text {...restProps}>{children}</EX.Text>;
};

Expertise.MML = function ExpertiseMM({ children, ...restProps }) {
  return <EX.MML {...restProps}>{children}</EX.MML>;
};

Expertise.MMS = function ExpertiseMM({ children, ...restProps }) {
  return <EX.MMS {...restProps}>{children}</EX.MMS>;
};

Expertise.MMBedge = function ExpertiseMMBadge({ children, ...restProps }) {
  return <EX.MMBedge {...restProps}>{children}</EX.MMBedge>;
};

Expertise.MMContent = function ExpertiseMMContent({ children, ...restProps }) {
  return <EX.MMContent {...restProps}>{children}</EX.MMContent>;
};

Expertise.MMText = function ExpertiseMMText({ children, ...restProps }) {
  return <EX.MMText {...restProps}>{children}</EX.MMText>;
};

Expertise.MMTitle = function ExpertiseMMTitle({ children, ...restProps }) {
  return <EX.MMTitle {...restProps}>{children}</EX.MMTitle>;
};
Expertise.Title = function ExpertiseTitle({ children, ...restProps }) {
  return <EX.Title>{children}</EX.Title>;
};

Expertise.List = function ExpertiseList({ children, ...restProps }) {
  return <EX.List>{children}</EX.List>;
};

Expertise.ListItem = function ExpertiseListItem({ children, ...restProps }) {
  return <EX.ListItem>{children}</EX.ListItem>;
};

Expertise.Subjects = function ExpertiseSubjects({ children, ...restProps }) {
  return <EX.Subjects>{children}</EX.Subjects>;
};

Expertise.Group = function ExpertiseGruop({ children }) {
  return <EX.Group>{children}</EX.Group>;
};

Expertise.Heading2 = function ExpertiseHeading2({ children }) {
  return <EX.Heading2>{children}</EX.Heading2>;
};

Expertise.Heading4 = function ExpertiseHeading4({ children }) {
  return <EX.Heading4>{children}</EX.Heading4>;
};

Expertise.ButtonContainer = function ExpertiseButtonContainer({ children }) {
  return <EX.ButtonContainer>{children}</EX.ButtonContainer>;
};

Expertise.Column = function ExpertiseColumn({ children }) {
  return <EX.Column>{children}</EX.Column>;
};

Expertise.Project = function ExpertiseProject({ children }) {
  return <EX.Project>{children}</EX.Project>;
};

Expertise.ProjectDot = function ExpertiseProjectDot({ children }) {
  return <EX.ProjectDot>{children}</EX.ProjectDot>;
};

Expertise.ProjectTitle = function ExpertiseProjectTitle({ children }) {
  return <EX.ProjectTitle>{children}</EX.ProjectTitle>;
};
Expertise.Box = function ExpertiseBox({ children }) {
  return <EX.Box>{children}</EX.Box>;
};

Expertise.ContainerFluid = function ExpertiseContainerFluid({ children }) {
  return <EX.ContainerFluid>{children}</EX.ContainerFluid>;
};

Expertise.MasonryGrid = function ExpertiseMasonryGrid({ children }) {
  return <EX.MasonryGrid>{children}</EX.MasonryGrid>;
};

Expertise.Col = function ExpertiseCol({ children }) {
  return <EX.Col>{children}</EX.Col>;
};

Expertise.TextBox = function ExpertiseTextBox({ children }) {
  return <EX.TextBox>{children}</EX.TextBox>;
};

Expertise.ScreenBox = function ExpertiseScreenBox({ children }) {
  return <EX.ScreenBox>{children}</EX.ScreenBox>;
};

Expertise.Link = function ExpertiseLink({ children }) {
  return <EX.Link>{children}</EX.Link>;
};

Expertise.TextBoxTitle = function ExpertiseTextBoxTitle({ children }) {
  return <EX.TextBoxTitle>{children}</EX.TextBoxTitle>;
};

Expertise.TextBoxText = function ExpertiseTextBoxText({ children }) {
  return <EX.TextBoxText>{children}</EX.TextBoxText>;
};

Expertise.Img = function ExpertiseImg({ ...restProps }) {
  return <EX.Img {...restProps} />;
};

Expertise.Floating = function ExpertiseFloating({ children }) {
  return <EX.Floating>{children}</EX.Floating>;
};

Expertise.Floating2 = function ExpertiseFloating({ children }) {
  return <EX.Floating2>{children}</EX.Floating2>;
};
