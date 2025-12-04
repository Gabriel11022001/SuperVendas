import config from "@/app/config/config";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type OpcaoMenuHomeProps = {

  titulo: string;
  telaRedirecionar: string;
  icone: string;
  onRedirecionar: () => void;
  primeiro?: boolean;
  ultimo?: boolean;

}

const OpcaoMenuHome = ({ titulo, telaRedirecionar, icone, onRedirecionar, primeiro, ultimo }: OpcaoMenuHomeProps) => {

  // obter o icone da opção
  const getIcone = () => {
    
    if (icone === "person") {

      return <FontAwesome6 name="person" size={ 70 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />;
    }

    if (icone === "product") {

      return <AntDesign name="product" size={ 70 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />
    }

    if (icone === "money-bill-alt") {

      return <FontAwesome5 name="money-bill-alt" size={ 70 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />;
    }

    return null;
  }

  const obterEspacamento = () => {

    if (primeiro) {

      return { marginStart: 0, marginEnd: 10 };
    }

    if (ultimo) {

      return { marginStart: 10, marginEnd: 0 };
    }

    return { marginStart: 10, marginEnd: 10 };
  }

  return (
    <TouchableOpacity
      style={ [
        styles.container,
        obterEspacamento()
      ] }
      onPress={ onRedirecionar } >
        { getIcone() }
        <Text style={ styles.titulo }>{ titulo }</Text>
    </TouchableOpacity>
  );
}

export default OpcaoMenuHome;