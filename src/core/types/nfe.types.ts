import { Endereco } from './endereco.types';
import { Icms, Ipi, Pis, Cofins } from './impostos.types';

export interface Emitente {
  cnpj: string;
  ie: string;
  im?: string;
  nome: string;
  nomeFantasia?: string;
  endereco: Endereco;
}

export interface Destinatario {
  cnpj?: string;
  cpf?: string;
  nome: string;
  ie?: string;
  email?: string;
  endereco: Endereco;
}

export interface Produto {
  codigo: string;
  descricao: string;
  ncm: string;
  cfop: string;
  unidade: string;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
  icms: Icms;
  ipi?: Ipi;
  pis?: Pis;
  cofins?: Cofins;
}

export interface NFeData {
  emitente: Emitente;
  destinatario: Destinatario;
  produtos: Produto[];
  naturezaOperacao: string;
  tipoDocumento: number;
  finalidade: number;
  informacoesComplementares?: string;
}

export interface NFeProcessada {
  id: string;
  chave: string;
  numero: number;
  serie: number;
  dataEmissao: string;
  emitente: string;
  destinatario: string;
  valorTotal: number;
  status: 'autorizada' | 'cancelada' | 'denegada' | 'rejeitada' | 'processando';
  protocolo?: string;
  xml?: string;
  createdAt: Date;
  updatedAt: Date;
}