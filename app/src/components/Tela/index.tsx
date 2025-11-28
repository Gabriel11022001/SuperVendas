import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Tela = ({ children }: any) => {

  return (
    <SafeAreaView style={ styles.tela }>
      { children }  
    </SafeAreaView>
  );
}

export default Tela;