import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
import { FaLinkedin } from "react-icons/fa"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx"
import TeamSection from "./Sections/TeamSection.jsx"
import ContactSection from "./Sections/ContactSection.jsx"

const dashboardRoutes = []

class LandingPage extends React.Component {
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
                <h1 className={classes.title}>Full Stack Web Developer</h1>
                {/* #57BFC7 */}
                {/* #D1366D */}
                <h4 style={{ color: "#00b200" }}>
                  <strong>
                    Computer Science Student at College of Engineering and
                    Applied Sciences at Western Michigan University
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
            <ProductSection />
            <TeamSection />
            <ContactSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
