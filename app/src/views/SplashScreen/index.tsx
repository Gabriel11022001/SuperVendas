import config from "@/app/config/config";
import { Ambiente, Cor } from "@/app/config/typesConfig";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { ActivityIndicator, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const SplashScreen = ({ navigation }: any) => {

  const versaoApp: string = config.versaoApp;
  const ambienteApp: Ambiente = config.ambiente;

  const tempoRedirecionar: number = 4000;

  const corPrincipal: Cor | undefined = config.cores.find(cor => cor.nomeCor == "principal");

  // redirecionar o usuário para a tela de login
  const redirecionarTelaLogin = (): void => {

    setTimeout(() => {
      navigation.navigate("login");
    }, tempoRedirecionar);

  }

  // obter o ambiente/versão do app para apresentar para o usuário
  const getVersaoAppAmbiente = (): string => {
    let ambiente: string = "";

    if (ambienteApp == Ambiente.dev) {
      ambiente = "desenvolvimento";
    } else if (ambienteApp == Ambiente.teste) {
      ambiente = "teste";
    } else if (ambienteApp == Ambiente.homol) {
      ambiente = "homologação";
    } else {
      ambiente = "produção";
    }

    return ambiente.toUpperCase() + " - " + versaoApp;
  }

  useFocusEffect(useCallback(() => {
    redirecionarTelaLogin();
  }, []));

  return (
    <SafeAreaView style={ {
      flex: 1,
      backgroundColor: corPrincipal?.cor,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    } }>
      <Image source={ require("../../../config/logos/logo.png") } style={ styles.logo } />
      <ActivityIndicator size={ 70 } color="#fff" />
      <Text style={ styles.versaoApp }>{ getVersaoAppAmbiente() }</Text>
    </SafeAreaView>
  );
}

export default SplashScreen;