import { container, title } from "assets/jss/material-kit-react.jsx"

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const profilePageStyle = {
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
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#00b200",
    fontWeight: "bold",
    fontSize: "1rem",
    textAlign: "center !important",
  },
  name: {
    marginTop: "-80px",
    color: "#00b200",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  ...imagesStyle,
  main: {
    background: "#353a3f",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    color: "#00b200",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
  tooltip: {
    backgroundColor: "#00b200",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
  },
}

export default profilePageStyle
