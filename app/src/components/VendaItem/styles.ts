import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  vendaItem: {
    width: "90%",
    marginStart: "5%",
    marginEnd: "5%",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 20,
    flexDirection: "column"
  },
  containerIconeCodigoVenda: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  codigoVenda: {
    marginStart: 10,
    backgroundColor: "#fafafa",
    padding: 5,
    elevation: 5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  containerDadosLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  cardDado: {
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10
  },
  tituloDado: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  txtDado: {
    fontSize: 16,
    marginTop: 5
  },
  txtStatusRascunho: {
    color: "#2980b9",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold"
  },
  txtStatusConcluida: {
    color: "#27ae60",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold"
  }

});

export default styles;