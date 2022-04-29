import React from "react";
import * as FOO from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <FOO.Main {...restProps}>{children}</FOO.Main>;
}

Footer.Heading2 = function FooterHeading2({ children, ...restProps }) {
  return <FOO.Heading2 {...restProps}>{children}</FOO.Heading2>;
};

Footer.Box = function FooterBox({ children, ...restProps }) {
  return <FOO.Box {...restProps}>{children}</FOO.Box>;
};

Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <FOO.Container {...restProps}>{children}</FOO.Container>;
};

Footer.Content = function FooterContent({ children, ...restProps }) {
  return <FOO.Content {...restProps}>{children}</FOO.Content>;
};

Footer.Tex = function FooterText({ children, ...restProps }) {
  return <FOO.Text {...restProps}>{children}</FOO.Text>;
};
