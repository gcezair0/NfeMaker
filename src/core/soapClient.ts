import soap from "soap";
import https from "https";
import { SoapConfig } from "./types";

export async function createSoapClient(config: SoapConfig) {
  const httpsAgent = new https.Agent({
    pfx: config.certificado.pfx,
    passphrase: config.certificado.senha,
    rejectUnauthorized: false
  });

  return soap.createClientAsync(config.wsdlUrl, {
    wsdl_options: { httpsAgent }
  });
}