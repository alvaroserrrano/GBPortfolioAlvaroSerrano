import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// nodejs library that concatenates classes
import classNames from "classnames"
// React icons
import {
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa"
// @material-ui/icons
import Face from "@material-ui/icons/Face"
import Chat from "@material-ui/icons/Chat"
import Build from "@material-ui/icons/Build"
// core components
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

import Tooltip from "@material-ui/core/Tooltip"
import Parallax from "components/Parallax/Parallax.jsx"
import Paper from "@material-ui/core/Paper"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/system"
//Images
import me from "assets/img/me.jpg"

import projectsPageStyle from "assets/jss/material-kit-react/views/projectsPage.jsx"

import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import CustomTabs from "components/CustomTabs/CustomTabs.jsx"
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx"
import TabPanel from "../../components/CustomTabs/TabPanel"
import image from "assets/img/bg7.jpg"
import { Typography } from "@material-ui/core"

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props)
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
    }
  }
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const state = { value: "" }
    const handleChange = event => {
      this.setState(([this.event.target] = this.event.value))
    }
    return (
      <div>
        <Header
          color="transparent"
          brand="Alvaro Serrano"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={me} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Alvaro Serrano Rivas</h3>
                      <h6>FULL STACK DEVELOPER</h6>
                      <Tooltip
                        id="linkedIn"
                        title="Follow me on linkedin"
                        placement={
                          typeof window !== "undefined" &&
                          window.innerWidth > 959
                            ? "bottom"
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
                      <Tooltip
                        id="GitHub"
                        title="Follow me on github"
                        placement={
                          typeof window !== "undefined" &&
                          window.innerWidth > 959
                            ? "bottom"
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
                      <Tooltip
                        id="telegram"
                        title="(+34)674459450"
                        placement={
                          typeof window !== "undefined" &&
                          window.innerWidth > 959
                            ? "bottom"
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
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  <br />
                  <strong>
                    Computer Science Student at College of Engineering and
                    Applied Sciences at WMU{" "}
                  </strong>
                </p>
              </div>

              <div className={classes.container}>
                <GridContainer justify="center" className={classes.navGroup}>
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.title}>
                      <h3>Projects</h3>
                    </div>
                    <Header
                      brand="Projects"
                      color="primary"
                      leftLinks={
                        <List className={classes.list}>
                          <ListItem className={classes.listItem}>
                            <Button
                              href="#pablo"
                              className={classes.navLink}
                              onClick={e => e.preventDefault()}
                              color="transparent"
                            >
                              <FaReact /> + <FaNodeJs /> + <FaDatabase />
                            </Button>
                          </ListItem>
                          <ListItem className={classes.listItem}>
                            <Button
                              href="#pablo"
                              className={classes.navLink}
                              onClick={e => e.preventDefault()}
                              color="transparent"
                            >
                              <FaJsSquare />
                            </Button>
                          </ListItem>
                          <ListItem className={classes.listItem}>
                            <Button
                              href="#pablo"
                              className={classes.navLink}
                              onClick={e => e.preventDefault()}
                              color="transparent"
                            >
                              <FaJava />
                            </Button>
                          </ListItem>
                          <ListItem className={classes.listItem}>
                            <CustomDropdown
                              buttonText="Dropdown"
                              dropdownHeader="Dropdown Header"
                              buttonProps={{
                                className: classes.navLink,
                                color: "transparent",
                              }}
                              dropdownList={[
                                "Action",
                                "Another action",
                                "Something else here",
                                { divider: true },
                                "Separated link",
                                { divider: true },
                                "One more separated link",
                              ]}
                            />
                          </ListItem>
                        </List>
                      }
                    />
                  </GridItem>
                </GridContainer>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(projectsPageStyle)(ProjectsPage)
