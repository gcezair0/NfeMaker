interface UrlAmbiente {
    autorizacao?: string;
    inutilizacao?: string;
    status?: string;
    evento?: string;
    retNfe?: string;
    consultaProtocolo?: string;
    consultaCadastro?: string;
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
                consultaProtocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
                consultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
                status: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
                evento: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
                retNfe: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
                consultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
            }
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
                status: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
                evento: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
                retNfe: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
                consultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4",
                status: "https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4",
                evento: "https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4",
                retNfe: "https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4",
                consultaCadastro: "https://nfe.sefaz.am.gov.br/services2/services/CadConsultaCadastro4",
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
                consultaProtocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeconsultaProtocolo4/NFeconsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeconsultaProtocolo4/NFeconsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
            }
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeconsultaProtocolo4/NFeconsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.sefaz.ba.gov.br/webservices/NFeconsultaProtocolo4/NFeconsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx",
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
                consultaProtocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeconsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
                status: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
                evento: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeconsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
                status: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
                evento: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeconsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
                status: "https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
                evento: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefaz.go.gov.br/nfe/services/NFeconsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
            },
        }
    },
    MG: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4",
                status: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4",
                evento: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4",
            },
            homologacao: {
                autorizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4",
                status: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4",
                evento: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4",
                status: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4",
                evento: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4",
            },
            homologacao: {
                autorizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4",
                status: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4",
                evento: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.fazenda.mg.gov.br/nfe2/services/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4",
            },
        }
    },
    MS: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4",
                status: "https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4",
                evento: "https://nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.ms.gov.br/ws/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4",
                status: "https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4",
                evento: "https://nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.ms.gov.br/ws/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4",
                status: "https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4",
                evento: "https://nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.ms.gov.br/ws/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4",
                status: "https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4",
                evento: "https://nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.ms.gov.br/ws/NFeconsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4",
            },
        },
    },
    MT: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
                status: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
                evento: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
                consultaCadastro: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
                status: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
                evento: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
                consultaCadastro: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
                status: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
                evento: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
                consultaCadastro: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
                status: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
                evento: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
                consultaCadastro: "https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
            },
        },

    },
    PE: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4",
                status: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4",
                evento: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4",
                status: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4",
                evento: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4",
                status: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4",
                evento: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4",
                inutilizacao: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4",
                status: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4",
                evento: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4",
                retNfe: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4",
                consultaProtocolo: "https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4",
                consultaCadastro: "https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
            },

        }
    },
    PR: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
                status: "https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
                evento: "https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
                status: "https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
                evento: "https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
                status: "https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
                evento: "https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
            },
            homologacao: {
                autorizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
                inutilizacao: "https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
                status: "https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
                evento: "https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
                retNfe: "https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
                consultaProtocolo: "https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
                consultaCadastro: "https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
            },
        }
    },
    RS: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
        }
    },
    SP: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx",
                inutilizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx",
                status: "https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx",
                evento: "https://nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx",
                retNfe: "https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx",
                consultaProtocolo: "https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx",
                inutilizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx",
                status: "https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx",
                evento: "https://nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx",
                retNfe: "https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx",
                consultaProtocolo: "https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            }
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx",
                inutilizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx",
                status: "https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx",
                evento: "https://nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx",
                retNfe: "https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx",
                consultaProtocolo: "https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx",
                inutilizacao: "https://nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx",
                status: "https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx",
                evento: "https://nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx",
                retNfe: "https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx",
                consultaProtocolo: "https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            }
        }
    },
    SVAN: {
        nfe: {
            producao: {
                autorizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
                consultaCadastro: "https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx",
            },
        },
    },
    SVRS: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                inutilizacao: "https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
        }
    },
    SVCAN: {
        nfe: {
            producao: {
                autorizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },
            homologacao: {
                autorizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx",
                inutilizacao: "https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx",
                status: "https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx",
                evento: "https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx",
                retNfe: "https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx",
                consultaCadastro: "https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx",
            },

        }
    },
    SVCRS: {
        nfe: {
            producao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
            },
        },
        nfce: {
            producao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
            },
            homologacao: {
                autorizacao: "https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx",
                status: "https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx",
                evento: "https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx",
                retNfe: "https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx",
                consultaProtocolo: "https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx",
            },
        },

    }
};