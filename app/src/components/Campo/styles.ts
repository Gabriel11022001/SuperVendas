import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  containerCampo: {
    width: "90%",
    marginStart: "5%",
    marginEnd: "5%",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "column"
  },
  label: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16
  },
  campo: {
    width: "100%",
    padding: 10,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    fontSize: 16,
    color: "#000",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c8cad0",
    borderStyle: "solid"
  },
  containerCampoObrigatorio: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  campoObrigatorio: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16
  },
  erroCampo: {
    color: "red",
    fontSize: 16,
    marginTop: 6
  }

});

export default styles;