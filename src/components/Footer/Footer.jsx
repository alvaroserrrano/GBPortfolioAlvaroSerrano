/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { List, ListItem, withStyles } from "@material-ui/core"

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/alvaro-serrano-rivas/"
                className={classes.block}
                target="_blank"
              >
                Learn more
              </a>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <a href="/resume" className={classes.block}>
                Resume
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/projects" className={classes.block}>
                Projects
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://codingblog-alvaro-serrano.netlify.com"
                target="_blank"
                rel="noopener nonreferrer"
                className={classes.block}
              >
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , Alvaro Serrano Rivas.
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
