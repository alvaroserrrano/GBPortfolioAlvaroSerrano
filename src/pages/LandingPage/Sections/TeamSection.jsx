import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Tooltip from "@material-ui/core/Tooltip"
// @material-ui/icons

// React icons
import { FaGithub, FaArchive } from "react-icons/fa"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx"

import project4 from "assets/img/project4.jpg"
import project2 from "assets/img/project2.jpeg"
import project3 from "assets/img/project3.gif"

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Top projects</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img
                    src={project4}
                    alt="devConnector"
                    className={imageClasses}
                  />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  DevConnector
                  <br />
                  <small className={classes.smallTitle}>
                    Connect developers
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    <ul>
                      <li>Social Networking site for developers</li>
                      <li>
                        Create a profile, share posts and Github repositories,
                        comment and like posts, meet other developers
                      </li>
                      <li>
                        MongoDB - Mongoose - Node - Express - React - Redux -
                        JWT authentication
                      </li>
                    </ul>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="Github"
                    title="Code"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "bottom"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://github.com/alvaroserrrano/devConnector"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaGithub />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="Live"
                    title="Live site"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "bottom"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://dev-connector-alvaro-serrano.herokuapp.com/"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaArchive />
                    </Button>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={project2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Social Apes Site
                  <br />
                  <small className={classes.smallTitle}>Networking site</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    <ul>
                      <li>Social networking site</li>
                      <li>Dynamic SPA and</li>
                      <li>Node - Firebase - React - Redux - MaterialUI</li>
                    </ul>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="Github"
                    title="Server-side"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "bottom"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://github.com/alvaroserrrano/SocialMediaApp"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaGithub />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="Github"
                    title="Client side"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "bottom"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://socialape-44490.firebaseapp.com/"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaGithub />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="Live"
                    title="Live site"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "bottom"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://github.com/alvaroserrrano/SocialApeClient"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaArchive />
                    </Button>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={project3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Coding Blog
                  <br />
                  <small className={classes.smallTitle}>Personal Blog</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    <ul>
                      <li>
                        Code spliting - Image optimization - Pull data from
                        markdown files
                      </li>
                      <li>Gatsby - Graphql</li>
                    </ul>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Tooltip
                    id="Github"
                    title="Code"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "bottom"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://github.com/alvaroserrrano/CodeBlog"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaGithub />
                    </Button>
                  </Tooltip>

                  <Tooltip
                    id="Live"
                    title="Live site"
                    placement={
                      typeof window !== "undefined" && window.innerWidth > 959
                        ? "bottom"
                        : "left"
                    }
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      href="https://codingblog-alvaro-serrano.netlify.com/"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <FaArchive />
                    </Button>
                  </Tooltip>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(teamStyle)(TeamSection)
