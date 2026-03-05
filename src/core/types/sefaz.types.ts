export interface RetornoSefaz {
  sucesso: boolean;
  mensagem: string;
  dados?: any;
  codigo?: string;
}

export interface UrlAmbiente {
  autorizacao?: string;
  inutilizacao?: string;
  status?: string;
  evento?: string;
  retNfe?: string;
  consultaProtocolo?: string;
  consultaCadastro?: string;
}

export interface UrlsPorUF {
  producao: UrlAmbiente;
  homologacao: UrlAmbiente;
}