import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import footerStyle from "assets/jss/designguideStyles/components/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/introduction" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.aquaculturealliance.org/" className={classes.block}>
                GAA
              </a>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <a href="https://www.bapcertification.org/" target="_blank" rel="noopener noreferrer" className={classes.block}>
                BAP
              </a>
            </ListItem>

          </List>
        </div>
        <p className={classes.right}>
          <small>
            &copy; {1900 + new Date().getYear()}{" "}
              Global Aquaculture Alliance
          </small>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
