import { Ambiente, Config } from "./typesConfig";

const config: Config = {

  ambiente: Ambiente.dev,
  cliente: "Cliente de teste",
  urllocal: "",
  urlHomol: "",
  urlTeste: "",
  urlProducao: "",
  versaoApp: "1.0",
  cores: [
    {
      nomeCor: "principal",
      cor: "#e15f41"
    },
    {
      nomeCor: "secundaria",
      cor: "#e77f67"
    }
  ]

}

export default config;