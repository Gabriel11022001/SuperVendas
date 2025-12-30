import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export enum TipoCampo {

  default,
  email,
  cpf,
  dataNascimento,
  cep,
  telefone,
  dinheiro,
  numero

}

interface CampoProps {

  valor: string;
  placeholder: string;
  tamanhoMaximo: number;
  erroCampo: string;
  label: string;
  onAlterarValor: (textoDigitado: string) => void;
  tipoCampo: TipoCampo;
  habilitado: boolean;
  obrigatorio: boolean;

}

const Campo = ({
  valor,
  placeholder,
  tamanhoMaximo,
  erroCampo,
  label,
  onAlterarValor,
  tipoCampo,
  habilitado,
  obrigatorio = false
}: CampoProps) => {

  // obter a mascara do campo
  const getMascara = (): string => {

    if (tipoCampo === TipoCampo.cpf) {

      return "";
    }

    if (tipoCampo === TipoCampo.dataNascimento) {

      return "";
    }

    if (tipoCampo === TipoCampo.cep) {

      return "";
    }

    if (tipoCampo === TipoCampo.telefone) {

      return "";
    }

    if (tipoCampo === TipoCampo.dinheiro) {

    }

    return "";
  }

  return (
    <View style={ styles.containerCampo }>
      <View style={ styles.containerCampoObrigatorio }>
        <Text style={ styles.label }>{ label }</Text>
        { obrigatorio && <Text style={ styles.campoObrigatorio }>*</Text> }
      </View>
      <TextInput
        style={ styles.campo }
        value={ valor }
        maxLength={ tamanhoMaximo }
        placeholder={ placeholder }
        editable={ habilitado }
        onChangeText={ (textoDigitado: string) => {
          onAlterarValor(textoDigitado);
        } } />
      { erroCampo != "" && <Text style={ styles.erroCampo }>{ erroCampo }</Text> }
    </View>
  );
}

export default Campo;