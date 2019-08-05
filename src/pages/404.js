import React from "react"
import classNames from "classnames"
import notFoundPageStyle from "assets/jss/material-kit-react/views/notFoundPageStyle.jsx"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
export default withStyles(notFoundPageStyle)(NotFound)
