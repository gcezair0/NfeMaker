export interface CertificadoA1 {
    pfx: Buffer;  
    senha: string;
  }
  
  export interface SoapConfig {
    wsdlUrl: string;
    certificado: CertificadoA1;
  }
  
  export interface RetornoSefaz {
    sucesso: boolean;
    mensagem: string;
    dados?: any;
  }