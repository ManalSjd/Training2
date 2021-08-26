import { AchatRoutingModule } from "./achat-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FournisseurComponent } from "./fournisseur/fournisseur.component";
import { TableModule } from "primeng/table";
import { ThemeModule } from "../../@theme/theme.module";
import { FormComponent } from './fournisseur/form/form.component';

@NgModule({
  declarations: [FournisseurComponent, FormComponent],
  imports: [ThemeModule, TableModule, CommonModule, AchatRoutingModule],
})
export class AchatModule {}
