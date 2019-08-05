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
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
//Images
import me from "assets/img/me.jpg"

import projectsPageStyle from "assets/jss/material-kit-react/views/projectsPage.jsx"
import CustomTabs from "components/CustomTabs/CustomTabs.jsx"
import TeamSection from "../../pages/LandingPage/Sections/TeamSection"
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
              <TeamSection />
              <div className={classes.container}>
                <GridContainer justify="center" className={classes.navGroup}>
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.title}>
                      <h3>
                        <strong>Projects</strong>
                      </h3>
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomTabs
                      plainTabs
                      scrollButtons
                      variant="scrollable"
                      className={classes.list}
                      headerColor="success"
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
                              <Grid
                                container
                                spacing={3}
                                direction="column"
                                justify="center"
                                alignItems="center"
                              >
                                <Grid item xs={12} sm={6} alignItems="center">
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
                            <Grid
                              container
                              spacing={3}
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                  <CardHeader
                                    avatar={
                                      <Avatar
                                        aria-label="Food2Fork"
                                        className={classes.avatar}
                                      >
                                        F2F
                                      </Avatar>
                                    }
                                    title="Forkify  "
                                    subheader="Recipe finder app"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      Data fetched from Food2Fork API <br />
                                      <br />
                                      <strong>Technologies:</strong>HTML - CSS -
                                      Bootstrap - ES6 - Async Javascript
                                      <br />
                                      <br />
                                      Search for recipes, add to the cart, see
                                      details, check other recipes made by that
                                      chef...
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
                                        href="https://github.com/alvaroserrrano/forkify"
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
                                        href="https://js-forkify-alvaro-serrano.netlify.com/"
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
                                        aria-label="BudgetController"
                                        className={classes.avatar}
                                      >
                                        BC
                                      </Avatar>
                                    }
                                    title="Budget Controller"
                                    subheader="Manage your finances"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      Algorithms and calculation based on user
                                      input <br />
                                      <br />
                                      <strong>Technologies:</strong>HTML - CSS -
                                      Javascript - Babel - Webpack
                                      <br />
                                      <br />
                                      Take control over your incomes and
                                      expenses
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
                                        href="https://github.com/alvaroserrrano/budgetApp/tree/master"
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
                                        href="https://js-budget-controller-alvaro-serrano.netlify.com/"
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
                                        aria-label="CapitalLookup"
                                        className={classes.avatar}
                                      >
                                        C
                                      </Avatar>
                                    }
                                    title="Capital lookup"
                                    subheader="JSON Autocompletion"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      JSON autocompletion for capital lookup in
                                      the US <br />
                                      <br />
                                      <strong>Technologies:</strong>HTML - CSS -
                                      ES6 - Javascript - Babel - Webpack
                                      <br />
                                      <br />
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
                                        href="https://github.com/alvaroserrrano/autocomplete-capital-search"
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
                                        href="https://capital-lookup-auto-complete.netlify.com"
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
                          ),
                        },
                        {
                          tabName: (
                            <Fragment>
                              <ListItem className={classes.listItem}>
                                <Tooltip
                                  id="React"
                                  title="React"
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
                                    <FaReact />
                                  </Button>
                                </Tooltip>
                              </ListItem>
                            </Fragment>
                          ),
                          tabContent: (
                            <Grid
                              container
                              spacing={3}
                              justify="center"
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                  <CardHeader
                                    avatar={
                                      <Avatar
                                        aria-label="Ecommerce"
                                        className={classes.avatar}
                                      >
                                        P
                                      </Avatar>
                                    }
                                    title="Ecommerce"
                                    subheader="Buy cell phones"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      Ecommerce site for buying cellphones
                                      <br />
                                      <strong>Technologies:</strong>React - JSX
                                      - Styled Components
                                      <br />
                                      Frontend application. See phones, add them
                                      to the cart, see prices and taxes
                                      applied...
                                      <br />
                                      Data fetched from a JSON object
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
                                        href="https://github.com/alvaroserrrano/EcommerceSite/tree/master/ecommerce"
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
                                        href="https://react-ecommerce-alvaro-serrano.netlify.com/"
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
                                        aria-label="Beach Resort"
                                        className={classes.avatar}
                                      >
                                        BR
                                      </Avatar>
                                    }
                                    title="Beach Resort"
                                    subheader="Deluxe rooms"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      Resort site
                                      <br />
                                      <strong>Technologies:</strong>React - JSX
                                      - Contentful
                                      <br />
                                      Frontend application. Data retrieved from
                                      a CMS
                                      <br />
                                      Filter rooms based on your preferences
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
                                        href="https://github.com/alvaroserrrano/react_resorts"
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
                                        href="https://resorts-alvaro-serrano.netlify.com/"
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
                            <Grid
                              container
                              spacing={3}
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                  <CardHeader
                                    avatar={
                                      <Avatar
                                        aria-label="PostFix App"
                                        className={classes.avatar}
                                      >
                                        P
                                      </Avatar>
                                    }
                                    title="Postfix"
                                    subheader="Random Access on Binary Files"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      Java application that reads data from
                                      three random access (binary) files and
                                      reconstructs the corresponding postfix
                                      expressions (based on what was read from
                                      the input file).
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
                                        href="https://github.com/alvaroserrrano/PostFixExpressions"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <FaGithub />
                                      </IconButton>
                                    </Tooltip>
                                  </CardActions>
                                </Card>
                              </Grid>
                            </Grid>
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
                            <Grid
                              container
                              container
                              spacing={3}
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                  <CardHeader
                                    avatar={
                                      <Avatar
                                        aria-label="TournamentTracker"
                                        className={classes.avatar}
                                      >
                                        P
                                      </Avatar>
                                    }
                                    title="Tournament Tracker"
                                    subheader="Desktop application"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      Create a tournament, add members to a
                                      team, configure matchups...
                                      <br />
                                      Interfaces || Email || SQL Server || Text
                                      Files || Data storage and retrieval || OOP
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
                                        href="https://github.com/alvaroserrrano/TournamentTracker"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <FaGithub />
                                      </IconButton>
                                    </Tooltip>
                                  </CardActions>
                                </Card>
                              </Grid>
                            </Grid>
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
                            <Grid
                              container
                              spacing={3}
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} sm={6}>
                                <Card className={classes.card}>
                                  <CardHeader
                                    avatar={
                                      <Avatar
                                        aria-label="FreecodeGram"
                                        className={classes.avatar}
                                      >
                                        P
                                      </Avatar>
                                    }
                                    title="Freecodegram"
                                    subheader="Instagram clone"
                                  />

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="textSecondary"
                                      component="p"
                                    >
                                      Instagram clone
                                      <br />
                                      Add posts, comments, likes...
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
                                        href="https://github.com/alvaroserrrano/freeCodeGram"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <FaGithub />
                                      </IconButton>
                                    </Tooltip>
                                  </CardActions>
                                </Card>
                              </Grid>
                            </Grid>
                          ),
                        },
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(projectsPageStyle)(ProjectsPage)
