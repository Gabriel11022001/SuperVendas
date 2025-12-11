import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface BotaoProps {

  texto: string;
  habilitado: boolean;
  onPressionar: () => void;

}

const Botao = ({ texto, habilitado, onPressionar }: BotaoProps) => {

  return <TouchableOpacity
    style={
      [
        styles.botao,
        habilitado ? styles.btnHabilitado : styles.btnDesabilitado
      ]
    }
    disabled={ !habilitado }
    onPress={ onPressionar } >
    <Text style={ styles.txtBtn }>{ texto }</Text>
  </TouchableOpacity>
}

export default Botao;