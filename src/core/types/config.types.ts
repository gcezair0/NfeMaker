import { CertificadoA1 } from './certificado.types';

export interface SoapConfig {
  wsdlUrl: string;
  certificado: CertificadoA1;
}

export interface ConfigEmitente {
  uf: string;
  ambiente: 'producao' | 'homologacao';
  certificado: CertificadoA1;
  cnpj: string;
  ie: string;
  serie: number;
}