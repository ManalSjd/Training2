import { EmailValidator } from "@angular/forms";

export interface Supplier {
  RaisonSocial: string;
  siteWeb: string;
  type: string;
  telephone: number;
  email: EmailValidator;
  Adresse: string;
  dateFacture: Date;
  numeroFacture: string;
  fournisseur: string;
  referenceInterne: string;
  projet: string;
  etat: string;
  dateEcheance: Date;
  deviseId?: number;
  resteARegler: number;
  montantTTC: number;
  montantHT: number;
  montantTVA: number;
  categorieOperation: string;
  libelle: string;
  delaiLivraison: number;
  dateLivraison: Date;
  isComptabiliser: boolean;
  id: number;
}
