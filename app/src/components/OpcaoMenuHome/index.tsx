import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type OpcaoMenuHomeProps = {

  titulo: string;
  telaRedirecionar: string;
  icone: string;
  onRedirecionar: () => void;

}

const OpcaoMenuHome = ({ titulo, telaRedirecionar, icone, onRedirecionar }: OpcaoMenuHomeProps) => {

  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ onRedirecionar } >
        <Text style={ styles.titulo }>{ titulo }</Text>
    </TouchableOpacity>
  );
}

export default OpcaoMenuHome;