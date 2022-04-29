import React from "react";
import * as HB from "./styles/hobbies";

export default function Hobbies({ children, ...restProps }) {
  return <HB.Main {...restProps}>{children}</HB.Main>;
}

Hobbies.Container = function HobbiesContainer({ children, ...restProps }) {
  return <HB.Container {...restProps}>{children}</HB.Container>;
};

Hobbies.Content = function HobbiesContent({ children, ...restProps }) {
  return <HB.Content {...restProps}>{children}</HB.Content>;
};

Hobbies.Text = function HobbiesText({ children, ...restProps }) {
  return <HB.Text {...restProps}>{children}</HB.Text>;
};

Hobbies.Heading4 = function HobbiesHeading4({ children, ...restProps }) {
  return <HB.Heading4 {...restProps}>{children}</HB.Heading4>;
};

Hobbies.Heading2 = function HobbiesHeading2({ children, ...restProps }) {
  return <HB.Heading2 {...restProps}>{children}</HB.Heading2>;
};

Hobbies.Box = function HobbiesBox({ children, ...restProps }) {
  return <HB.Box {...restProps}>{children}</HB.Box>;
};

Hobbies.Img = function HobbiesImg({ ...restProps }) {
  return <HB.Img {...restProps} />;
};

Hobbies.MbCol = function HobbiesMbCol({ children, ...restProps }) {
  return <HB.MbCol {...restProps}>{children}</HB.MbCol>;
};

Hobbies.Row = function HobbiesRow({ children, ...restProps }) {
  return <HB.Row {...restProps}>{children}</HB.Row>;
};

Hobbies.PortfolioDetails = function HobbiesText({ children, ...restProps }) {
  return <HB.PortfolioDetails {...restProps}>{children}</HB.PortfolioDetails>;
};

Hobbies.Col = function HobbiesCol({ children, ...restProps }) {
  return <HB.Col {...restProps}>{children}</HB.Col>;
};
