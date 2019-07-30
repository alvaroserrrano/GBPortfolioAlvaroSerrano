import { container } from "assets/jss/material-kit-react.jsx"
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const signupPageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  name: {
    marginTop: "-80px",
  },
  title: {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },

  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  root2: {
    flexGrow: 1,
    width: "100%",
  },
  navGroup: {
    marginTop: "60px",
  },
}

export default signupPageStyle
