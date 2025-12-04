import config from "@/app/config/config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  card: {
    width: "48%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    height: 160,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  valor: {
    color: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
    fontSize: 20,
    fontWeight: "bold"
  },
  containerIconeValor: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  texto: {
    color: "#000",
    fontSize: 16,
    marginTop: 10
  }

});

export default styles;