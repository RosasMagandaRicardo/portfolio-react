import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import "../App.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className="title"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            RICARDO ROSAS MAGANDA
          </Typography>
          <Button color="inherit">ACERCA DE</Button>
          <Button color="inherit">ESTUDIOS</Button>
          <Button color="inherit">CONTACTO</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
