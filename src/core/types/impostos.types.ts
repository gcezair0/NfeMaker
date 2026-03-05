export interface Icms {
  origem: number;
  cst: string;
  modBC?: number;
  vBC?: number;
  pICMS?: number;
  vICMS?: number;
}

export interface Ipi {
  cEnq: string;
  CST: string;
  vBC?: number;
  pIPI?: number;
  vIPI?: number;
}

export interface Pis {
  CST: string;
  vBC?: number;
  pPIS?: number;
  vPIS?: number;
}

export interface Cofins {
  CST: string;
  vBC?: number;
  pCOFINS?: number;
  vCOFINS?: number;
}