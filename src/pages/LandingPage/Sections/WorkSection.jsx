import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// react-icons
import { FaLinkedin } from "react-icons/fa"
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import CustomInput from "components/CustomInput/CustomInput.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Tooltip from "@material-ui/core/Tooltip"

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx"

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact me</h2>
            <h4 className={classes.description}>
              <em>Have questions?</em> <br />
              <em>Want to work together?</em>
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
            </h4>
            <form
              method="post"
              action="https://getform.io/f/0b4f916e-25b6-4810-b947-d0de5dbcca08"
            >
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    name="name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    white
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    name="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    white
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  name="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                  white
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(workStyle)(WorkSection)
