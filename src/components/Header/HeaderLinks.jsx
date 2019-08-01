/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// @material-ui/icons
import { Apps, WebAsset } from "@material-ui/icons"

// React icons
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/resume" color="transparent" className={classes.navLink}>
          <WebAsset className={classes.icons} /> Resume
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/projects"
          color="transparent"
          className={classes.navLink}
        >
          <WebAsset className={classes.icons} /> Projects
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedIn"
          title="Follow me on linkedin"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/alvaro-serrano-rivas/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaLinkedin />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="GitHub"
          title="Follow me on github"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/alvaroserrrano"
            target="_blank"
            className={classes.navLink}
          >
            <FaGithub />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="telegram"
          title="(+34)674459450"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://telegram.org/"
            target="_blank"
            className={classes.navLink}
          >
            <FaTelegram />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
