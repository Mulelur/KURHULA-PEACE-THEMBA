import React from "react";
import * as CON from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <CON.Main {...restProps}>{children}</CON.Main>;
}

Contact.Container = function ContactContainer({ children, ...restProps }) {
  return <CON.Container {...restProps}>{children}</CON.Container>;
};

Contact.Header = function ContactHeader({ children, ...restProps }) {
  return <CON.Header {...restProps}>{children}</CON.Header>;
};

Contact.Title = function ContactTitle({ children, ...restProps }) {
  return <CON.Title {...restProps}>{children}</CON.Title>;
};

Contact.Text = function ContactText({ children, ...restProps }) {
  return <CON.Text {...restProps}>{children}</CON.Text>;
};

Contact.Icons = function ContactIcons({ children, ...restProps }) {
  return <CON.Icons {...restProps}>{children}</CON.Icons>;
};

Contact.IconsItem = function ContactIconsItem({ children, ...restProps }) {
  return <CON.IconsItem {...restProps}>{children}</CON.IconsItem>;
};

Contact.IconsTitle = function ContactIconsTitle({ children, ...restProps }) {
  return <CON.IconsTitle {...restProps}>{children}</CON.IconsTitle>;
};

Contact.IconsText = function ContactIconsText({ children, ...restProps }) {
  return <CON.IconsText {...restProps}>{children}</CON.IconsText>;
};

Contact.Icon = function ContactIconsText({ ...restProps }) {
  return <CON.Icon {...restProps} />;
};

Contact.Body = function ContactIconsBody({ children, ...restProps }) {
  return <CON.Body {...restProps}>{children}</CON.Body>;
};

Contact.Box = function ContactIconsBox({ children, ...restProps }) {
  return <CON.Box {...restProps}>{children}</CON.Box>;
};

Contact.Content = function ContactIconsContent({ children, ...restProps }) {
  return <CON.Content {...restProps}>{children}</CON.Content>;
};

Contact.Heading1 = function ContactIconsBody({ children, ...restProps }) {
  return <CON.Heading1 {...restProps}>{children}</CON.Heading1>;
};

Contact.Form = function ContactIconsForm({ children, ...restProps }) {
  return <CON.Form {...restProps}>{children}</CON.Form>;
};

Contact.Input = function ContactIconsInput({ children, ...restProps }) {
  return <CON.Input {...restProps}>{children}</CON.Input>;
};

Contact.FormGroup = function ContactIconsFormGroup({ children, ...restProps }) {
  return <CON.FormGroup {...restProps}>{children}</CON.FormGroup>;
};

Contact.TextArea = function ContactIconsTextArea({ children, ...restProps }) {
  return <CON.TextArea {...restProps}>{children}</CON.TextArea>;
};

Contact.Col = function ContactIconsCol({ children, ...restProps }) {
  return <CON.Col {...restProps}>{children}</CON.Col>;
};

Contact.Button = function ContactIconsButton({ children, ...restProps }) {
  return <CON.Button {...restProps}>{children}</CON.Button>;
};

Contact.ContactCard = function ContactIconsContactCard({
  children,
  ...restProps
}) {
  return <CON.ContactCard {...restProps}>{children}</CON.ContactCard>;
};

Contact.ContactCardItem = function ContactIconsContactCardItem({
  children,
  ...restProps
}) {
  return <CON.ContactCardItem {...restProps}>{children}</CON.ContactCardItem>;
};

Contact.ContactCardLink = function ContactIconsContactCardLink({
  children,
  ...restProps
}) {
  return <CON.ContactCardLink {...restProps}>{children}</CON.ContactCardLink>;
};

Contact.ContactCardText = function ContactIconsContactCardText({
  children,
  ...restProps
}) {
  return <CON.ContactCardText {...restProps}>{children}</CON.ContactCardText>;
};
