import config from "@/app/config/config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  botao: {
    width: "90%",
    marginStart: "5%",
    marginEnd: "5%",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    height: 60
  },
  txtBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  btnHabilitado: {
    backgroundColor: config.cores.find(cor => cor.nomeCor === "principal")?.cor
  },
  btnDesabilitado: {
    backgroundColor: "#c8cad0",
    opacity: 0.8
  }

});

export default styles;