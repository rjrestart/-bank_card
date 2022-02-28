import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  card: {
    background: "#d3d7db",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    height: "140px",
    justifyContent: "space-between",
    overflow: "hidden",
    padding: "30px",
    position: "relative",
    transition: "background .2s ease-in-out",
    width: "260px",
    "::after": {
      borderLeft: "240px solid rgba(255,255,255,0.1)",
      borderBottom: "120px solid transparent",
      content: "''",
      left: 0,
      position: "absolute",
      top: 0,
      zIndex: 0
    }
  },
  cardRow: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    zIndex: 1
  },
  chip: {
    backgroundColor: "#fdee9c",
    borderRadius: "5px",
    height: "25px",
    width: "30px"
  },
  isVisa: {
    background: "#1dafec"
  },
  isMastercard: {
    background: "#333"
  },
  isAmericanExpress: {
    background: "#808080"
  },
  isDiscover: { 
    background: "#800080"
  },
  isMaestro: {
    background: "#ff0000"
  }
});
