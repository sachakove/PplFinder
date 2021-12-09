import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const routes = ["/", "/favorites"];
  const history = useHistory();
  const [value, setValue] = useState(() => (history ? history.location.pathname : "/"));

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" value={routes[0]} component={Link} to="/" />
        <Tab label="Favorites" value={routes[1]} component={Link} to="/favorites" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
