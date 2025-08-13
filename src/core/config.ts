interface UrlAmbiente {
    autorizacao: string;
    inutilizacao?: string;
    status?: string;
    evento?: string;
    retNfe?: string;
    consultaprotocolo?: string;
    ConsultaCadastro?: string;
  }
  
  interface UrlsPorUF {
    producao: UrlAmbiente;
    homologacao: UrlAmbiente;
  }
  
export const urlsSefaz: Record<string, { nfe?: UrlsPorUF; nfce?: UrlsPorUF; mdfe?: UrlsPorUF; cte?: UrlsPorUF }> = {

  AM: {
    nfe: {
      producao: {
        autorizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
        inutilizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
        status: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
        evento: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
        retNfe: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
        consultaprotocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
        ConsultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
      },
      homologacao: {
        autorizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
        inutilizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
        status: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
        evento: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
        retNfe: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
        consultaprotocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
        ConsultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
      }
    },
    nfce: {
        producao: {
            autorizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
            inutilizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
            status: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
            evento: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
            retNfe: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
            consultaprotocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
            ConsultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
          },
          homologacao: {
            autorizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
            inutilizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
            status: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
            evento: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
            retNfe: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
            consultaprotocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
            ConsultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
          } 
    }
  },
  BA: {
    nfe: {
        producao: {
            autorizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
            inutilizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
            status: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
            evento: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            retNfe: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
            consultaprotocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
            ConsultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
          },
          homologacao: {
            autorizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
            inutilizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
            status: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
            evento: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            retNfe: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
            consultaprotocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
            ConsultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
          } 
    },
    nfce: {
        producao: {
            autorizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
            inutilizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
            status: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
            evento: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            retNfe: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
            consultaprotocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
            ConsultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
          },
          homologacao: {
            autorizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
            inutilizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
            status: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
            evento: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
            retNfe: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
            consultaprotocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
            ConsultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
          } 
    }
  },
  GO: {
    nfe: {
        producao: {
            autorizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
            inutilizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
            status: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
            evento: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
            retNfe: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
            consultaprotocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
            ConsultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
          },
          homologacao: {
            autorizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
            inutilizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
            status: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
            evento: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
            retNfe: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
            consultaprotocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
            ConsultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
          },
    },
    nfce: {
        producao: {
            autorizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
            inutilizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
            status: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
            evento: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
            retNfe: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
            consultaprotocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
            ConsultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
          },
          homologacao: {
            autorizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
            inutilizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
            status: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
            evento: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
            retNfe: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
            consultaprotocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
            ConsultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
          },
    }
  },
};