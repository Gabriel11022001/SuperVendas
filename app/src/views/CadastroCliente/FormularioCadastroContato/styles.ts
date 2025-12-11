import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999999999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    elevation: 5,
    flexDirection: "column",
    padding: 10
  }

});

export default styles;