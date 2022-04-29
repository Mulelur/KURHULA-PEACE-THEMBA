import * as React from "react";

import * as IN from "./styles/Intros";

export default function Intros({ children, ...restProps }) {
  return <IN.Main {...restProps}>{children}</IN.Main>;
}

Intros.Heading2 = function IntrosHeading2({ children, ...restProps }) {
  return <IN.Heading2 {...restProps}>{children}</IN.Heading2>;
};

Intros.Heading4 = function IntrosHeading4({ children, ...restProps }) {
  return <IN.Heading4 {...restProps}>{children}</IN.Heading4>;
};

Intros.Heading3 = function IntrosHeading3({ children, ...restProps }) {
  return <IN.Heading3 {...restProps}>{children}</IN.Heading3>;
};

Intros.Content = function IntrosContent({ children, ...restProps }) {
  return <IN.Content {...restProps}>{children}</IN.Content>;
};

Intros.Container = function IntrosContainer({ children, ...restProps }) {
  return <IN.Container {...restProps}>{children}</IN.Container>;
};

Intros.Box = function IntrosBox({ children, ...restProps }) {
  return <IN.Box {...restProps}>{children}</IN.Box>;
};

Intros.TextBox = function IntrosTextBox({ children, ...restProps }) {
  return <IN.TextBox {...restProps}>{children}</IN.TextBox>;
};

Intros.Text = function IntrosText({ children, ...restProps }) {
  return <IN.Text {...restProps}>{children}</IN.Text>;
};

Intros.BoxOverlay = function IntrosBoxOverlay({ children, ...restProps }) {
  return <IN.BoxOverlay {...restProps}>{children}</IN.BoxOverlay>;
};
