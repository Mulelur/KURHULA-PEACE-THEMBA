import React from "react";
import * as HM from "./styles/Home";

export default function Home({ children, ...restProps }) {
  return <HM.Main {...restProps}>{children}</HM.Main>;
}

Home.Container = function HomeContainer({ children, ...restProps }) {
  return <HM.Container {...restProps}>{children}</HM.Container>;
};

Home.Content = function HomeContainer({ children, ...restProps }) {
  return <HM.Content {...restProps}>{children}</HM.Content>;
};

Home.Heading4 = function HomeHeading4({ children, ...restProps }) {
  return <HM.Heading4 {...restProps}>{children}</HM.Heading4>;
};

Home.Heading2 = function HomeHeading2({ children, restProps }) {
  return <HM.Heading2 {...restProps}>{children}</HM.Heading2>;
};

Home.Download = function HomeDownload({ children, ...restProps }) {
  return <HM.Download {...restProps}>{children}</HM.Download>;
};

Home.Image = function HomeImage({ ...restProps }) {
  return <HM.Image {...restProps} />;
};

Home.Text = function HomeText({ children, ...restProps }) {
  return <HM.Text {...restProps}>{children}</HM.Text>;
};

Home.ImageMain = function HomeImageMain({ children, ...restProps }) {
  return <HM.ImageMain {...restProps}>{children}</HM.ImageMain>;
};
Home.BoxContainer = function HomeBoxContainer({ children, ...restProps }) {
  return <HM.BoxContainer {...restProps}>{children}</HM.BoxContainer>;
};
Home.Box = function HomeBox({ children, ...restProps }) {
  return <HM.Box {...restProps}>{children}</HM.Box>;
};

Home.Links = function HomeNavItem({ children, ...restProps }) {
  return <HM.Links {...restProps}>{children}</HM.Links>;
};

Home.Link = function HomeNavItem({ children, ...restProps }) {
  return <HM.Link {...restProps}>{children}</HM.Link>;
};

Home.Divider = function HomeNavItem({ children, ...restProps }) {
  return <HM.Divider {...restProps}>{children}</HM.Divider>;
};
