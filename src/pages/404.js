import React from "react"
import classNames from "classnames"
import notFoundPageStyle from "assets/jss/material-kit-react/views/notFoundPageStyle.jsx"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

// React icons
import { FaLinkedin } from "react-icons/fa"

//Sections
import WorkSection from "./LandingPage/Sections/WorkSection.jsx"

const dashboardRoutes = []

class NotFound extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Alvaro Serrano"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing2-bg.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>404 error</h1>
                {/* #57BFC7 */}
                {/* #D1366D */}
                <h4 style={{ color: "#00b200" }}>
                  <strong>
                    The requested path was not found on this server
                  </strong>
                </h4>
                <br />
                <Button
                  color="facebook"
                  size="lg"
                  href="https://www.linkedin.com/in/alvaro-serrano-rivas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  Stay tuned
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default withStyles(notFoundPageStyle)(NotFound)
