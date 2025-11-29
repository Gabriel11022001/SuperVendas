import config from "@/app/config/config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerLogo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  textoRealizeLogin: {
    color: "#000",
    marginTop: 40,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 30,
    fontStyle: "italic"
  },
  labelCampoLogin: {
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16
  },
  campo: {
    width: "100%",
    height: 60,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid"
  },
  campoComErro: {
    color: "red",
    borderColor: "red"
  },
  campoSemErro: {
    borderColor: "#c8cad0",
    color: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
  },
  botaoLogin: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    elevation: 5,
    marginBottom: 100,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  botaoLoginHabilitado: {
    backgroundColor: config.cores.find(cor => cor.nomeCor === "principal")?.cor
  },
  botaoLoginDesabilitado: {
    backgroundColor: "#c8cad0"
  },
  txtBtnLogin: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    fontStyle: "italic"
  },
  txtErroCampo: {
    color: "red",
    fontSize: 16,
    marginTop: 6
  },
  containerRecuperarSenha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  btnEsqueciSenha: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  txtEsqueciSenha: {
    color: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
    fontSize: 16,
    textDecorationColor: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
    textDecorationLine: "underline",
    textDecorationStyle: "solid"
  }
});

export default styles;