import { Ambiente, Config } from "./typesConfig";

const config: Config = {

  ambiente: Ambiente.dev,
  cliente: "Cliente de teste",
  logo: "",
  urllocal: "",
  urlHomol: "",
  urlTeste: "",
  urlProducao: "",
  versaoApp: "1.0",
  cores: [
    {
      nomeCor: "principal",
      cor: ""
    },
    {
      nomeCor: "secundaria",
      cor: ""
    }
  ]

}

export default config;