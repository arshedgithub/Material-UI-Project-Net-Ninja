import React from "react";
import { Drawer, makeStyles, Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },

  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
