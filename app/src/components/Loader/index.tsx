import config from "@/app/config/config";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./styles";

type LoaderProps = {

  mensagem: string;

}

const Loader = ({ mensagem }: LoaderProps) => {

  // cor principal
  const corPrincipal: string = config.cores.find(cor => cor.nomeCor === "principal")?.cor ?? "#fff";
  // cor dos textos e do ActivityIndicator
  const corTextos: string = corPrincipal === "#fff" ? "#000" : "#fff";

  if (mensagem.trim() === "") {

    return null;
  }

  return <View style={ styles.containerLoader }>
    <ActivityIndicator size={ 70 } color={ corTextos } />
    <Text style={ [ styles.textoLoader, { color: corTextos } ] }>{ mensagem }</Text>
  </View>
}

export default Loader;