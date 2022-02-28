import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  wrapper: {
    width: "100%"
  },
  input: {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.4)",
    color: "#fff",
    fontFamily: "monospace",
    fontSize: "20px",
    width: "100%",
    ":focus": {
      outline: "none"
    }
  }
});
