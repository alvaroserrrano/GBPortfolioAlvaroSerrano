import React, { Fragment } from "react"
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
  FaPhp,
  FaShare,
} from "react-icons/fa"
// core components
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"
import Parallax from "components/Parallax/Parallax.jsx"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Grid from "@material-ui/core/Grid"
import Button from "components/CustomButtons/Button.jsx"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
//Images
import me from "assets/img/me.jpg"

import projectsPageStyle from "assets/jss/material-kit-react/views/projectsPage.jsx"
import CustomTabs from "components/CustomTabs/CustomTabs.jsx"

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
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    {/* <ProjectsTabs /> */}
                    <CustomTabs
                      plainTabs
                      className={classes.list}
                      headerColor="primary"
                      tabs={[
                        {
                          tabName: (
                            <Fragment>
                              <ListItem className={classes.listItem}>
                                <Tooltip
                                  id="MERN"
                                  title="MERN stack"
                                  placement={
                                    typeof window !== "undefined" &&
                                    window.innerWidth > 959
                                      ? "top"
                                      : "left"
                                  }
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                    href="#"
                                    className={classes.navLink}
                                    onClick={e => e.preventDefault()}
                                    color="transparent"
                                  >
                                    <FaReact /> + <FaNodeJs /> + <FaDatabase />
                                  </Button>
                                </Tooltip>
                              </ListItem>
                            </Fragment>
                          ),
                          tabContent: (
                            <Fragment>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} spacing={3}>
                                  <Card className={classes.card}>
                                    <CardHeader
                                      avatar={
                                        <Avatar
                                          aria-label="codeBlog"
                                          className={classes.avatar}
                                        >
                                          C
                                        </Avatar>
                                      }
                                      title="CodeBlog"
                                      subheader="Coding blog"
                                    />

                                    <CardContent>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                      >
                                        Full stack Application <br />
                                        <br />
                                        <strong>Technologies:</strong>Gatsby -
                                        Markdown - Graphql
                                        <br />
                                        <br />
                                        Code splitting - Image optimization -
                                        SEO - Prefetching
                                      </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                      <Tooltip
                                        id="MERN"
                                        title="See code"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="See code"
                                          href="https://github.com/alvaroserrrano/CodeBlog"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaGithub />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip
                                        id="MERN"
                                        title="Live site"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="Live site"
                                          href="https://codingblog-alvaro-serrano.netlify.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaShare />
                                        </IconButton>
                                      </Tooltip>
                                    </CardActions>
                                  </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Card className={classes.card}>
                                    <CardHeader
                                      avatar={
                                        <Avatar
                                          aria-label="socialApes"
                                          className={classes.avatar}
                                        >
                                          S
                                        </Avatar>
                                      }
                                      title="socialApes"
                                      subheader="Social media site"
                                    />

                                    <CardContent>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                      >
                                        Full stack Application <br />
                                        <br />
                                        <strong>Technologies:</strong>Firebase -
                                        Cloud Functions - NodeJS - ReactJS -
                                        Redux
                                        <br />
                                        <br />
                                        Create a profile, add posts, likes,
                                        comments...
                                      </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                      <Tooltip
                                        id="MERN"
                                        title="Client-side code"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="Client side"
                                          href="https://github.com/alvaroserrrano/SocialApeClient"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaGithub />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip
                                        id="MERN"
                                        title="Server-side code"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="Server-side code"
                                          href="https://github.com/alvaroserrrano/SocialMediaApp"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaGithub />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip
                                        id="MERN"
                                        title="Live site"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="Live site"
                                          href="https://socialape-44490.firebaseapp.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaShare />
                                        </IconButton>
                                      </Tooltip>
                                    </CardActions>
                                  </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Card className={classes.card}>
                                    <CardHeader
                                      avatar={
                                        <Avatar
                                          aria-label="devConnector"
                                          className={classes.avatar}
                                        >
                                          S
                                        </Avatar>
                                      }
                                      title="devConnector"
                                      subheader="Social site for developers"
                                    />

                                    <CardContent>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                      >
                                        Full stack Application <br />
                                        <br />
                                        <strong>Technologies:</strong>MongoDB -
                                        Mongoose - NodeJs - JWT - BCrypt - React
                                        - Redux
                                        <br />
                                        <br />
                                        Create a profile, share git
                                        repositories, add posts, comments,
                                        likes...
                                      </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                      <Tooltip
                                        id="MERN"
                                        title="Client-side code"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="Client side"
                                          href="https://github.com/alvaroserrrano/devConnector"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaGithub />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip
                                        id="MERN"
                                        title="Server-side code"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="Live code"
                                          href="https://dev-connector-alvaro-serrano.herokuapp.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaShare />
                                        </IconButton>
                                      </Tooltip>
                                    </CardActions>
                                  </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Card className={classes.card}>
                                    <CardHeader
                                      avatar={
                                        <Avatar
                                          aria-label="devConnector"
                                          className={classes.avatar}
                                        >
                                          CG
                                        </Avatar>
                                      }
                                      title="codingGigs"
                                      subheader="Job finder app"
                                    />

                                    <CardContent>
                                      <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                      >
                                        Full stack Application <br />
                                        <br />
                                        <strong>Technologies:</strong>HTML - CSS
                                        - Sequelize - PostgreSQL - NodeJS -
                                        Handlebars
                                        <br />
                                        <br />
                                        Add new jobs and view current jobs
                                        offers matching your skills
                                      </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                      <Tooltip
                                        id="MERN"
                                        title="Client-side code"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="See code"
                                          href="https://github.com/alvaroserrrano/gigs-job-search"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaGithub />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip
                                        id="MERN"
                                        title="Live site"
                                        placement={
                                          typeof window !== "undefined" &&
                                          window.innerWidth > 959
                                            ? "bottom"
                                            : "left"
                                        }
                                        classes={{ tooltip: classes.tooltip }}
                                      >
                                        <IconButton
                                          aria-label="Server-side code"
                                          href="https://dev-job-search-alvaro-serrano.herokuapp.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <FaShare />
                                        </IconButton>
                                      </Tooltip>
                                    </CardActions>
                                  </Card>
                                </Grid>
                              </Grid>
                            </Fragment>
                          ),
                        },
                        {
                          tabName: (
                            <Fragment>
                              <ListItem className={classes.listItem}>
                                <Tooltip
                                  id="JS"
                                  title="Vanilla Javascript"
                                  placement={
                                    typeof window !== "undefined" &&
                                    window.innerWidth > 959
                                      ? "top"
                                      : "left"
                                  }
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                    href="#"
                                    className={classes.navLink}
                                    onClick={e => e.preventDefault()}
                                    color="transparent"
                                  >
                                    <FaJsSquare />
                                  </Button>
                                </Tooltip>
                              </ListItem>
                            </Fragment>
                          ),
                          tabContent: (
                            <p className={classes.textCenter}>
                              I think that’s a responsibility that I have, to
                              push possibilities, to show people, this is the
                              level that things could be at. I will be the
                              leader of a company that ends up being worth
                              billions of dollars, because I got the answers. I
                              understand culture. I am the nucleus. I think
                              that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level
                              that things could be at.
                            </p>
                          ),
                        },
                        {
                          tabName: (
                            <Fragment>
                              <ListItem className={classes.listItem}>
                                <Tooltip
                                  id="Java"
                                  title="JAVA"
                                  placement={
                                    typeof window !== "undefined" &&
                                    window.innerWidth > 959
                                      ? "top"
                                      : "left"
                                  }
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                    href="#"
                                    className={classes.navLink}
                                    onClick={e => e.preventDefault()}
                                    color="transparent"
                                  >
                                    <FaJava />
                                  </Button>
                                </Tooltip>
                              </ListItem>
                            </Fragment>
                          ),
                          tabContent: (
                            <p className={classes.textCenter}>
                              think that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level
                              that things could be at. So when you get something
                              that has the name Kanye West on it, it’s supposed
                              to be pushing the furthest possibilities. I will
                              be the leader of a company that ends up being
                              worth billions of dollars, because I got the
                              answers. I understand culture. I am the nucleus.
                            </p>
                          ),
                        },
                        {
                          tabName: (
                            <Fragment>
                              <ListItem className={classes.listItem}>
                                <Tooltip
                                  id="C"
                                  title="C#"
                                  placement={
                                    typeof window !== "undefined" &&
                                    window.innerWidth > 959
                                      ? "top"
                                      : "left"
                                  }
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                    href="#"
                                    className={classes.navLink}
                                    onClick={e => e.preventDefault()}
                                    color="transparent"
                                  >
                                    C#
                                  </Button>
                                </Tooltip>
                              </ListItem>
                            </Fragment>
                          ),
                          tabContent: (
                            <p className={classes.textCenter}>
                              I think that’s a responsibility that I have, to
                              push possibilities, to show people, this is the
                              level that things could be at. I will be the
                              leader of a company that ends up being worth
                              billions of dollars, because I got the answers. I
                              understand culture. I am the nucleus. I think
                              that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level
                              that things could be at.
                            </p>
                          ),
                        },
                        {
                          tabName: (
                            <Fragment>
                              <ListItem className={classes.listItem}>
                                <Tooltip
                                  id="Laravel"
                                  title="Laravel"
                                  placement={
                                    typeof window !== "undefined" &&
                                    window.innerWidth > 959
                                      ? "top"
                                      : "left"
                                  }
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                    href="#"
                                    className={classes.navLink}
                                    onClick={e => e.preventDefault()}
                                    color="transparent"
                                  >
                                    <FaPhp />
                                  </Button>
                                </Tooltip>
                              </ListItem>
                            </Fragment>
                          ),
                          tabContent: (
                            <p className={classes.textCenter}>
                              I think that’s a responsibility that I have, to
                              push possibilities, to show people, this is the
                              level that things could be at. I will be the
                              leader of a company that ends up being worth
                              billions of dollars, because I got the answers. I
                              understand culture. I am the nucleus. I think
                              that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level
                              that things could be at.
                            </p>
                          ),
                        },
                      ]}
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
