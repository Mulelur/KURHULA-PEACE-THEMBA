import React from "react";
import {
  Image,
  Column,
  Container,
  Heading2,
  Heading4,
  Text,
  Section,
  Buttons,
  Box,
  Heading1,
  TextArea,
  Content,
  Img,
  List,
  ListItem,
  ListTitle,
  ListText,
  TextCenter,
  Btn,
} from "./styles/aboutMe";

export default function AboutMe({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
}
AboutMe.Image = function AboutMeImage({ ...restProps }) {
  return <Image {...restProps} />;
};

AboutMe.Img = function AboutMeImg({ ...restProps }) {
  return <Img {...restProps} />;
};

AboutMe.Container = function AboutMeContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

AboutMe.Column = function AboutMeColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

AboutMe.Heading2 = function AboutMeHeading2({ children, ...restProps }) {
  return <Heading2 {...restProps}>{children}</Heading2>;
};

AboutMe.Heading4 = function AboutMeHeading4({ children, ...restProps }) {
  return <Heading4 {...restProps}>{children}</Heading4>;
};

AboutMe.Text = function AboutMeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

AboutMe.Buttons = function AboutMeButtons({ children, ...restProps }) {
  return <Buttons {...restProps}>{children}</Buttons>;
};

AboutMe.Heading1 = function AboutMeHeading1({ children, ...restProps }) {
  return <Heading1 {...restProps}>{children}</Heading1>;
};
AboutMe.TextArea = function AboutMeTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};
AboutMe.Box = function AboutMeText({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
};

AboutMe.Content = function AboutMeContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

AboutMe.List = function AboutMeList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

AboutMe.ListItem = function AboutMeListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

AboutMe.ListTitle = function AboutMeListTitle({ children, ...restProps }) {
  return <ListTitle {...restProps}>{children}</ListTitle>;
};

AboutMe.ListText = function AboutMeListText({ children, ...restProps }) {
  return <ListText {...restProps}>{children}</ListText>;
};

AboutMe.TextCenter = function AboutMeTextCenter({ children, ...restProps }) {
  return <TextCenter {...restProps}>{children}</TextCenter>;
};

AboutMe.Btn = function AboutMeTextCenter({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
};
