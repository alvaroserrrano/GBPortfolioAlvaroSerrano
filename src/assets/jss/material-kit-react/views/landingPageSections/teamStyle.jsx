import { cardTitle, title } from "assets/jss/material-kit-react.jsx"
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1 rem",
    color: "#00b200",
    fontWeight: "bold",
    marginTop: "0.5 rem",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle,
  smallTitle: {
    color: "#00b200",
    fontWeight: "bold",
  },
  description: {
    color: "#e0e0e0",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0.5 rem",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#e0e0e0",
  },
  margin5: {
    margin: "5px",
  },
  navLink: {
    backgroundColor: "#00b200",
  },
  tooltip: {
    backgroundColor: "#00b200",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
  },
}

export default teamStyle
