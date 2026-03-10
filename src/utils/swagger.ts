import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NfeMaker API',
      version: '1.0.0',
      description: 'API para emissão de Notas Fiscais Eletrônicas (NF-e) e NFC-e',
      contact: {
        name: 'Suporte',
        email: 'gcezair0@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      },
      {
        url: 'https://api.exemplo.com',
        description: 'Servidor de Produção (em breve)'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            sucesso: {
              type: 'boolean',
              example: false
            },
            mensagem: {
              type: 'string',
              example: 'Erro ao processar requisição'
            },
            codigo: {
              type: 'string',
              example: 'VALIDATION_ERROR'
            },
            detalhes: {
              type: 'array',
              items: {
                type: 'object'
              }
            }
          }
        },
        Certificado: {
          type: 'object',
          required: ['pfxBase64', 'senha'],
          properties: {
            pfxBase64: {
              type: 'string',
              description: 'Certificado A1 em base64',
              example: 'MIIN...'
            },
            senha: {
              type: 'string',
              description: 'Senha do certificado',
              example: '123456'
            }
          }
        },
        Endereco: {
          type: 'object',
          required: ['logradouro', 'numero', 'bairro', 'codigoMunicipio', 'municipio', 'uf', 'cep'],
          properties: {
            logradouro: { type: 'string', example: 'Rua Teste' },
            numero: { type: 'string', example: '123' },
            complemento: { type: 'string', example: 'Sala 1' },
            bairro: { type: 'string', example: 'Centro' },
            codigoMunicipio: { type: 'string', example: '3550308' },
            municipio: { type: 'string', example: 'São Paulo' },
            uf: { type: 'string', example: 'SP' },
            cep: { type: 'string', example: '01001000' },
            pais: { type: 'string', example: 'Brasil' },
            codigoPais: { type: 'string', example: '1058' },
            telefone: { type: 'string', example: '1133334444' }
          }
        },
        Emitente: {
          type: 'object',
          required: ['cnpj', 'razaoSocial', 'inscricaoEstadual', 'crt', 'endereco'],
          properties: {
            cnpj: { type: 'string', example: '12345678000199' },
            razaoSocial: { type: 'string', example: 'EMPRESA TESTE LTDA' },
            nomeFantasia: { type: 'string', example: 'TESTE' },
            inscricaoEstadual: { type: 'string', example: '123456789' },
            inscricaoEstadualST: { type: 'string', example: '123456789' },
            inscricaoMunicipal: { type: 'string', example: '123456' },
            cnae: { type: 'string', example: '1234567' },
            crt: { 
              type: 'string', 
              enum: ['1', '2', '3'],
              description: '1=Simples Nacional, 2=Simples Nacional com excesso, 3=Regime Normal'
            },
            endereco: { $ref: '#/components/schemas/Endereco' }
          }
        },
        Destinatario: {
          type: 'object',
          required: ['nome', 'indicadorIE', 'endereco'],
          properties: {
            cnpj: { type: 'string', example: '99999999000199' },
            cpf: { type: 'string', example: '12345678909' },
            nome: { type: 'string', example: 'CLIENTE TESTE' },
            indicadorIE: { 
              type: 'string', 
              enum: ['1', '2', '9'],
              description: '1=Contribuinte, 2=Isento, 9=Não contribuinte'
            },
            inscricaoEstadual: { type: 'string', example: '123456789' },
            inscricaoSUFRAMA: { type: 'string', example: '123456789' },
            email: { type: 'string', example: 'cliente@email.com' },
            endereco: { $ref: '#/components/schemas/Endereco' }
          }
        },
        Item: {
          type: 'object',
          required: ['codigo', 'descricao', 'ncm', 'cfop', 'unidadeComercial', 'quantidadeComercial', 'valorUnitarioComercial', 'valorTotal'],
          properties: {
            codigo: { type: 'string', example: '001' },
            codigoBarras: { type: 'string', example: '1234567890123' },
            descricao: { type: 'string', example: 'PRODUTO TESTE' },
            ncm: { type: 'string', example: '12345678' },
            cest: { type: 'string', example: '1234567' },
            cfop: { type: 'string', example: '5102' },
            unidadeComercial: { type: 'string', example: 'UN' },
            quantidadeComercial: { type: 'number', example: 1 },
            valorUnitarioComercial: { type: 'number', example: 100.00 },
            valorTotal: { type: 'number', example: 100.00 },
            codigoBarrasTributavel: { type: 'string', example: '1234567890123' },
            unidadeTributavel: { type: 'string', example: 'UN' },
            quantidadeTributavel: { type: 'number', example: 1 },
            valorUnitarioTributavel: { type: 'number', example: 100.00 },
            frete: { type: 'number', example: 0 },
            seguro: { type: 'number', example: 0 },
            desconto: { type: 'number', example: 0 },
            outrasDespesas: { type: 'number', example: 0 },
            compoeTotal: { type: 'number', enum: [0, 1], example: 1 },
            informacoesAdicionais: { type: 'string', example: 'Informações adicionais do produto' },
            valorAproximadoTributos: { type: 'number', example: 10.00 },
            icms: { type: 'object' },
            ipi: { type: 'object' },
            pis: { type: 'object' },
            cofins: { type: 'object' }
          }
        },
        Pagamento: {
          type: 'object',
          required: ['tipoPagamento', 'valor', 'indicadorPagamento'],
          properties: {
            tipoPagamento: { 
              type: 'string',
              enum: ['01', '02', '03', '04', '05', '90', '99'],
              description: '01=Dinheiro, 02=Cheque, 03=Cartão Crédito, 04=Cartão Débito, 05=Crédito Loja, 90=Sem pagamento, 99=Outros'
            },
            valor: { type: 'number', example: 100.00 },
            indicadorPagamento: { type: 'number', enum: [0, 1], example: 1 },
            cartao: {
              type: 'object',
              properties: {
                tipoIntegracao: { type: 'number', enum: [1, 2], example: 1 },
                cnpj: { type: 'string', example: '12345678000199' },
                bandeira: { 
                  type: 'string',
                  enum: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
                  example: '01'
                },
                autorizacao: { type: 'string', example: '123456' }
              }
            }
          }
        },
        EmissaoRequest: {
          type: 'object',
          required: ['uf', 'ambiente', 'modelo', 'certificado', 'dadosNFe'],
          properties: {
            uf: { 
              type: 'string',
              enum: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
              example: 'SP'
            },
            ambiente: { 
              type: 'string',
              enum: ['producao', 'homologacao'],
              example: 'homologacao'
            },
            modelo: { 
              type: 'string',
              enum: ['nfe', 'nfce'],
              example: 'nfe'
            },
            certificado: { $ref: '#/components/schemas/Certificado' },
            dadosNFe: {
              type: 'object',
              required: ['naturezaOperacao', 'serie', 'numero', 'tipoOperacao', 'destino', 'codigoMunicipio', 'emitente', 'destinatario', 'itens', 'pagamentos'],
              properties: {
                naturezaOperacao: { type: 'string', example: 'VENDA' },
                serie: { type: 'number', example: 1 },
                numero: { type: 'number', example: 1001 },
                tipoOperacao: { type: 'number', enum: [0, 1], example: 1 },
                destino: { type: 'number', enum: [1, 2, 3], example: 1 },
                codigoMunicipio: { type: 'string', example: '3550308' },
                tipoImpressao: { type: 'number', example: 1 },
                tipoEmissao: { type: 'number', example: 1 },
                finalidade: { type: 'number', enum: [1, 2, 3, 4], example: 1 },
                consumidorFinal: { type: 'number', enum: [0, 1], example: 1 },
                presencaConsumidor: { type: 'number', enum: [0, 1, 2, 3, 4, 5, 9], example: 1 },
                emitente: { $ref: '#/components/schemas/Emitente' },
                destinatario: { $ref: '#/components/schemas/Destinatario' },
                itens: { 
                  type: 'array',
                  items: { $ref: '#/components/schemas/Item' }
                },
                pagamentos: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Pagamento' }
                },
                informacoesFisco: { type: 'string', example: 'Informações para o fisco' },
                informacoesComplementares: { type: 'string', example: 'Informações complementares' },
                modalidadeFrete: { type: 'number', enum: [0, 1, 2, 3, 4, 9], example: 0 }
              }
            }
          }
        },
        EmissaoResponse: {
          type: 'object',
          properties: {
            sucesso: { type: 'boolean', example: true },
            mensagem: { type: 'string', example: 'Nota fiscal emitida com sucesso' },
            dados: {
              type: 'object',
              properties: {
                chave: { type: 'string', example: '35200612345678000199550010000010011000010011' },
                numero: { type: 'number', example: 1001 },
                serie: { type: 'number', example: 1 },
                protocolo: { type: 'string', example: '123456789012345' },
                dataEmissao: { type: 'string', format: 'date-time', example: '2024-01-01T10:00:00-03:00' },
                xml: { type: 'string', description: 'XML da NF-e em base64' },
                danfe: { type: 'string', description: 'DANFE em base64' },
                qrcode: { type: 'string', description: 'URL do QR Code (NFC-e)' }
              }
            }
          }
        }
      }
    },
    tags: [
      {
        name: 'NF-e',
        description: 'Operações relacionadas à NF-e/NFC-e'
      }
    ]
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Arquivos contendo anotações Swagger
};

export const setupSwagger = (app: Express) => {
  const specs = swaggerJsdoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
};