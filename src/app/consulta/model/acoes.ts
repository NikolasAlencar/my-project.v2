export interface Acao {
  nome: string;
  opcao: number;
  descricao: string;
  erro: string;
}

export interface Acoes extends Array<Acao> {}
