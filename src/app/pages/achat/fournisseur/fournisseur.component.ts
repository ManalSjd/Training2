import { FormComponent } from "./form/form.component";
import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { id } from "@swimlane/ngx-charts";
import { ConfirmationService, MessageService } from "primeng/api";
import { Supplier } from "../supplier.model";
import { AchatService } from "./achat.service";
@Component({
  selector: "ngx-fournisseur",
  templateUrl: "./fournisseur.component.html",
  styleUrls: ["./fournisseur.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class FournisseurComponent implements OnInit {
  createForm: any;
  constructor(
    private route: ActivatedRoute,
    private api: AchatService,
    private router: Router,
    private achatService: AchatService
  ) {}
  supps: Array<Supplier> = [];
  panelTitle: string;
  fournisseur: Supplier = {} as Supplier;

  EditFoun(supplierId: number) {
    this.router.navigate(["/edit", supplierId]);
  }

  openNew() {
    this.router.navigate(["../form"], {
      relativeTo: this.route,
    });
  }
  ngOnInit() {
    this.api.apicall().subscribe((data) => {
      console.warn("get facture", data);
      this.supps = data.items;
    });
    this.route.paramMap.subscribe((parameterMap) => {
      const id = +parameterMap.get("id");
      this.getFournisseur(id);
    });
  }
  private getFournisseur(id: number) {
    if (id === 0) {
      this.fournisseur = {
        RaisonSocial: null,
        siteWeb: null,
        type: null,
        telephone: null,
        email: null,
        Adresse: null,
        dateFacture: null,
        numeroFacture: null,
        fournisseur: null,
        referenceInterne: null,
        projet: null,
        etat: null,
        dateEcheance: null,
        deviseId: null,
        resteARegler: null,
        montantTTC: null,
        montantHT: null,
        montantTVA: null,
        categorieOperation: null,
        libelle: null,
        delaiLivraison: null,
        dateLivraison: null,
        isComptabiliser: null,
        id: null,
      };
    } else {
      this.achatService
        .getFournisseur(id)
        .subscribe((result) => (this.fournisseur = result));
    }
  }
  editFournisseur(fournisseurId) {
    this.router.navigate(["../edit", fournisseurId], {
      relativeTo: this.route,
    });
  }
  saveFournisseur(): void {
    const newFournisseur: Supplier = Object.assign({}, this.fournisseur);
    this.achatService.saveAchat(newFournisseur);
    this.createForm.reset();
    this.router.navigate(["fournisseur"]);
  }
}
