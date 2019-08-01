import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
import Work from "@material-ui/icons/Work"
import School from "@material-ui/icons/School"
import Code from "@material-ui/icons/Code"
// React icons
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import NavPills from "components/NavPills/NavPills.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import Tooltip from "@material-ui/core/Tooltip"
//Images
import me from "assets/img/me.jpg"
import secin from "assets/img/secin.jpeg"
import unesmun from "assets/img/unesmun.png"
import campus from "assets/img/campus.jpg"
import wmu1 from "assets/img/wmu1.jpeg"
import hbst1 from "assets/img/hbst1.png"
import polyglot from "assets/img/polyglot.png"
import edx from "assets/img/edx.jpeg"
import udemy from "assets/img/udemy.jpg"
import communication from "assets/img/communication.jpg"
import linux from "assets/img/linux.jpeg"
import web from "assets/img/web.jpeg"
import php from "assets/img/php.jpg"
import java from "assets/img/java.jpg"
import firebase from "assets/img/firebase.png"
import django from "assets/img/django.png"
import mongo from "assets/img/mongo.jpeg"
import postgre from "assets/img/postgre.png"
import node from "assets/img/node.png"
import kali from "assets/img/kali.png"
import git from "assets/img/git.gif"
import resumePageStyle from "assets/jss/material-kit-react/views/resumePage.jsx"

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
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
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Work",
                        tabIcon: Work,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={secin}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={unesmun}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={campus}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={wmu1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Education",
                        tabIcon: School,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={wmu1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={hbst1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={polyglot}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={edx}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={udemy}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: "Skills",
                        tabIcon: Code,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={3}>
                              <img
                                alt="..."
                                src={communication}
                                className={navImageClasses}
                              />

                              <img
                                alt="..."
                                src={polyglot}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={linux}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={web}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                              <img
                                alt="..."
                                src={java}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={firebase}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={postgre}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={kali}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                              <img
                                alt="..."
                                src={php}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={django}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={mongo}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={node}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={git}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(resumePageStyle)(ProfilePage)
