import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Loader from "../../components/Loader";
import Tela from "../../components/Tela";
import styles from "./styles";

const Login = ({ navigation }: any) => {

  const [ loader, setLoader ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ senha, setSenha ] = useState<string>("");
  const [ erroEmail, setErroEmail ] = useState<string>("");
  const [ erroSenha, setErroSenha ] = useState<string>("");
  const [ mensagemErroLogin, setMensagemErroLogin ] = useState<string>("");

  // apresentar um alerta de erro para o usuário
  const apresentarAlertaErro = (mensagemErro: string): void => {
    setMensagemErroLogin(mensagemErro.trim());
  }

  const onDigitarEmail = (emailDigitado: string): void => {
    setEmail(emailDigitado);
    setErroEmail("");

    if (emailDigitado.trim() === "") {
      setErroEmail("Informe o e-mail.");
    }

  }

  const onDigitarSenha = (senhaDigitada: string): void => {
    setSenha(senhaDigitada);
    setErroSenha("");

    if (senhaDigitada.trim() === "") {
      setErroSenha("Informe a senha.");
    }

  }

  // implementar toda a lógica do login
  const login = async () => {
    // setLoader("Realizando autenticação no servidor, aguarde...");
  }

  // redirecionar o usuário para a tela para recuperar a senha
  const redirecionarTelaRecuperarSenha = (): void => {

  }

  const getStatusBotao = (): object => {

    if ((!erroEmail && !erroSenha) && email != "" && senha != "") {

      return styles.botaoLoginHabilitado;
    }

    return styles.botaoLoginDesabilitado;
  }

  return <Tela>
    <Loader mensagem={ loader } />
    <KeyboardAvoidingView
      style={ { flex: 1 } }
      behavior={ Platform.OS === "ios" ? "padding" : "height" }
      keyboardVerticalOffset={ 100 } >
      <ScrollView style={ { flex: 1 } } showsVerticalScrollIndicator={ false }>
        <View style={ styles.containerLogo }>
          <Image source={ require("../../../config/logos/logo.png") } style={ { width: 150, height: 150 } } />
        </View>
        <Text style={ styles.textoRealizeLogin }>Realize login para acessar o aplicativo.</Text>
        <Text style={ styles.labelCampoLogin }>E-mail*</Text>
        <TextInput
          style={ [ styles.campo, erroEmail != "" ? styles.campoComErro : styles.campoSemErro ] }
          value={ email }
          onChangeText={ (emailDiigtado) => {
            onDigitarEmail(emailDiigtado);
          } }
          placeholder="Digite o e-mail..."
          inputMode="email"
          maxLength={ 150 }
          autoCapitalize="none" />
        <Text style={ styles.txtErroCampo }>{ erroEmail }</Text>
        <View style={ styles.containerRecuperarSenha }>
          <Text style={ styles.labelCampoLogin }>Senha*</Text>
          <TouchableOpacity
            style={ styles.btnEsqueciSenha }
            onPress={ redirecionarTelaRecuperarSenha } >
            <Text style={ styles.txtEsqueciSenha }>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={ [
            styles.campo,
            erroSenha != "" ? styles.campoComErro : styles.campoSemErro
          ] }
          value={ senha }
          onChangeText={ (senhaDigitada) => {
            onDigitarSenha(senhaDigitada);
          } }
          placeholder="Digite a senha..."
          inputMode="text"
          secureTextEntry={ true }
          maxLength={ 6 }
          autoCapitalize="none" />
        <Text style={ styles.txtErroCampo }>{ erroSenha }</Text>
        <TouchableOpacity
          style={ [ styles.botaoLogin, getStatusBotao() ] }
          onPress={ login }
          disabled={ erroEmail != "" || erroSenha != "" || email == "" || senha == "" } >
          <Text style={ styles.txtBtnLogin }>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  </Tela>
}

export default Login;