import * as React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SectionHeaderContainer from "../container/home/Home";
import NavBarContainer from "../container/navBar";
import AboutMeDialog from "../container/aboutMe/aboutMeDialog";
import ExpertiseDialog from "../container/expertise/expertiseDialog";
import ContactDialog from "../container/contact/contactDialog";
import HobbiesDialog from "../container/hobbies/hobbiesDialog";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClickOpen = (id) => {
    setDialog({ id, open: true });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {dialogs.map((item, index) => (
          <ListItem button key={item.id}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText
              onClick={() => handleClickOpen(item.id)}
              primary={item.name}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const anchor = "right";

  return (
    <>
      <div
        style={{
          backgroundColor: "#161C2D",
        }}
      >
        <NavBarContainer setOpen={setOpen} />
        <SectionHeaderContainer />
        <AboutMeDialog />
        <ExpertiseDialog />
        <ContactDialog />
        <HobbiesDialog />
        <Drawer
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </div>
    </>
  );
}
