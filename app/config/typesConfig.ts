export type Cor = {

  nomeCor: string;
  cor: string;

}

export enum Ambiente {

  teste,
  homol,
  producao,
  dev

}

export type Config = {

  ambiente: Ambiente;
  cliente: string;
  cores: Array<Cor>;
  urllocal: string;
  urlTeste: string;
  urlHomol: string;
  urlProducao: string;
  logo: string;
  versaoApp: string;

}