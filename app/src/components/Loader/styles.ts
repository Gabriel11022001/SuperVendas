import config from "@/app/config/config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  containerLoader: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999999999999,
    opacity: 0.95
  },
  textoLoader: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic"
  }
});

export default styles;