import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./../../app-routing.module";
import { ThemeModule } from "./../../@theme/theme.module";
import { FacruteRoutingModule } from "./facture-routing.module";
import { TableModule } from "primeng/table";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FacturesComponent } from "./factures/factures.component";
import { FormulaireFactureComponent } from "./factures/formulaire-facture/formulaire-facture.component";
@NgModule({
  declarations: [FacturesComponent, FormulaireFactureComponent],
  imports: [ThemeModule, TableModule, FacruteRoutingModule],
})
export class FactureModule {}
