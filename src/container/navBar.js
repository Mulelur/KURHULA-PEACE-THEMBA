import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { NavBar } from "../components";
import { MenuIcon } from "../icons/icons";

export default function NavBarContainer({ setOpen }) {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClickOpen = (id) => {
    setDialog({ id, open: true });
  };

  const [showMenu, setShowMenu] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);

  const onScroll = () => {
    if (window.scrollY >= 2) {
      setScrolling(true);
      setShowMenu(true);
    } else {
      setShowMenu(false);
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <NavBar>
      <NavBar.Container scrolling={scrolling} showMenu={showMenu}>
        <NavBar.NavLink>
          <NavBar.Logo>Weblinnk</NavBar.Logo>
        </NavBar.NavLink>
        <NavBar.Menu
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <MenuIcon />
        </NavBar.Menu>
        <NavBar.List>
          {dialogs.map((item) => {
            return (
              <NavBar.ListItem onClick={() => handleClickOpen(item.id)}>
                <NavBar.NavLink>{item.name}.</NavBar.NavLink>
              </NavBar.ListItem>
            );
          })}
        </NavBar.List>
      </NavBar.Container>
    </NavBar>
  );
}
