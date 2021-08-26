import { FormulaireFactureComponent } from "./factures/formulaire-facture/formulaire-facture.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FacturesComponent } from "./factures/factures.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "factures",
        component: FacturesComponent,
      },
      {
        path: "formulaire-facture",
        component: FormulaireFactureComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacruteRoutingModule {}

export const routedComponents = [FacturesComponent, FormulaireFactureComponent];
