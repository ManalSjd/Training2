import { FournisseurComponent } from "./../achat/fournisseur/fournisseur.component";

import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./fournisseur/form/form.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "fournisseur",
        component: FournisseurComponent,
      },
      {
        path: "form",
        component: FormComponent,
      },
      {
        path: "edit/:id",
        component: FormComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatRoutingModule {}

export const routedComponents = [FournisseurComponent];
