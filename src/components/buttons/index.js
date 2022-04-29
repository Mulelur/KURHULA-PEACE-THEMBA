import React from "react";
import { CvButton, LatterButton, Close, ButtonLink } from "./styles/button";

export function Button({ children, ...restProps }) {
  return <CvButton {...restProps}>{children}</CvButton>;
}

export function DownloadlatterButton({ children, ...restProps }) {
  return <LatterButton {...restProps}>{children}</LatterButton>;
}

export function ClearButton({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
}

export function Link({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
}
