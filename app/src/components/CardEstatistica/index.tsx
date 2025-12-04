import config from "@/app/config/config";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Text, View } from "react-native";
import styles from "./styles";

type CardEstatisticaProps = {

  texto: string;
  valor: string;
  icone: string;
  cardValorDinheiro?: boolean;

}

const CardEstatistica = (props: CardEstatisticaProps) => {

  const getIconeCard = () => {

    if (props.icone == "person") {

      return <FontAwesome6 name="person" size={ 40 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />
    }

    if (props.icone == "product") {

      return <AntDesign name="product" size={ 40 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />
    }

    if (props.icone === "money-bill-alt") {

      return <FontAwesome5 name="money-bill-alt" size={ 40 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />;
    }

    if (props.icone === "edit") {

      return <AntDesign name="edit" size={ 40 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />;
    }

    if (props.icone === "like") {

      return <AntDesign name="like" size={ 40 } color={ config.cores.find(cor => cor.nomeCor === "principal")?.cor } />;
    }

    return null;
  }

  return (
    <View style={ [ styles.card, props.cardValorDinheiro ? { width: "100%" } : {} ] }>
      <View style={ styles.containerIconeValor }>
        { /** valor do card */ }
        <Text style={ styles.valor }>{ props.valor }</Text>
        { /** icone do card */ }
        { getIconeCard() }
      </View>
      { /** texto do card */ }
      <Text style={ styles.texto }>{ props.texto }</Text>
    </View>
  );
}

export default CardEstatistica;