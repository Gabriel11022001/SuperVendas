import config from "@/app/config/config";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  txtBemVindo: {
    color: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
    fontSize: 30,
    fontWeight: 900,
    marginStart: "5%",
    marginTop: 30
  },
  containerLinhaEstatistica: {
    width: "90%",
    marginStart: "5%",
    marginEnd: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10
  },
  containerOpcoesMenuHome: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  containerVisualizarMaisVendas: {
    width: "90%",
    marginStart: "5%",
    marginEnd: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20
  },
  txtUltimasVendas: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  txtBtnVisualizarMaisVendas: {
    color: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
    fontSize: 16,
    textDecorationColor: config.cores.find(cor => cor.nomeCor === "principal")?.cor,
    textDecorationLine: "underline",
    textDecorationStyle: "solid"
  }

});

export default styles;