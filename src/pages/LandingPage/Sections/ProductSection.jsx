import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons
import ShutterSpeed from "@material-ui/icons/ShutterSpeed"
import Devices from "@material-ui/icons/Devices"
import Web from "@material-ui/icons/Web"
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import InfoArea from "components/InfoArea/InfoArea.jsx"

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Full Stack Web Developer</h2>
            <h5 className={classes.description}>
              I am a Full Stack developer with industry experience building
              websites and web applications.{" "}
              <span role="img" aria-label="happy">
                😀
              </span>
              <br />I specialize in <strong>JavaScript</strong> and have
              experience working with
              <strong>Python</strong>, <strong>Java</strong>,{" "}
              <strong>C#</strong>, and <strong>PHP</strong>.{" "}
              <span role="img" aria-label="happy">
                🤩
              </span>{" "}
              <br /> I also have working knowledge of <strong>SQL</strong>, and
              non-relational databases like <strong>MongoDB</strong> and{" "}
              <strong>Firebase</strong>.
              <span role="img" aria-label="happy">
                🤓
              </span>
              <br /> In my free time I love learning about{" "}
              <strong>ethical hacking</strong>.{" "}
              <span role="img" aria-label="happy">
                😎
              </span>
              <br /> I can speak <strong>Spanish</strong>,{" "}
              <strong>English</strong>, <strong>French</strong>,{" "}
              <strong>Italian</strong>, and <strong>German</strong>
              <span role="img" aria-label="languages">
                🇪🇸🇺🇸🇮🇹🇫🇷🇩🇪
              </span>
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Fast"
                description="Regardless of changing trends, minimalism is my priority. Fast load times and intuitive sites"
                icon={ShutterSpeed}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Responsive"
                description="Web designs and layouts that work on any device"
                icon={Devices}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Dynamic"
                description="I bring websites to life with both, client and server side rendering"
                icon={Web}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(productStyle)(ProductSection)
