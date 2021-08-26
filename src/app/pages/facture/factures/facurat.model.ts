export interface facturat {
  [x: string]: any;
  dateFacture: Date;
  numeroFacture?: any;
  client: string;
  referenceInterne: string;
  projet?: any;
  montantTTC: number;
  montantHT: number;
  montantTVA: number;
  statut: string;
  etat: string;
  dateEcheance: Date;
  deviseId?: any;
  resteARegler: number;
  isComptabiliser: boolean;
  adresseLivraison?: any;
  villeLivraison?: any;
  isSameAdresse: boolean;
  id: number;
}
