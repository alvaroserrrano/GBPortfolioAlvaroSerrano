import React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/system"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"

export class TabPanel extends React.Component {
  state = {
    value: 0,
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { children, value, index, ...other } = this.props
    return (
      <div>
        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-auto-tab-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
        >
          <Box p={3}>{children}</Box>
        </Typography>
      </div>
    )
  }
}
export default TabPanel
