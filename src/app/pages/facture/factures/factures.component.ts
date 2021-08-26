import { FacturesService } from "./../factures.service";
import { Component, OnInit } from "@angular/core";
import { facturat } from "./facurat.model";
import { MessageService } from "primeng/api";
import { ConfirmationService } from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ngx-factures",
  templateUrl: "./factures.component.html",
  styleUrls: ["./factures.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class FacturesComponent implements OnInit {
  Facts: Array<facturat> = [];
  submitted: boolean;
  factDialog: boolean;
  invoice: facturat;

  constructor(
    private api: FacturesService,

    private router: Router,
    private route: ActivatedRoute
  ) {}
  openNew() {
    this.router.navigate(["../formulaire-facture"], {
      relativeTo: this.route,
    });
  }
  ngOnInit(): void {
    this.api.apicall().subscribe((data) => {
      console.warn("get facture", data);
      this.Facts = data.items;
    });
  }
}
