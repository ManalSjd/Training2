import { FacturesService } from "./../../factures.service";
import { facturat } from "./../facurat.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";

import { MessageService } from "primeng/api";
import {
  NbCalendarRange,
  NbDateService,
  NbToastrService,
} from "@nebular/theme";

@Component({
  selector: "ngx-formulaire-facture",
  templateUrl: "./formulaire-facture.component.html",
  styleUrls: ["./formulaire-facture.component.scss"],
  providers: [MessageService],
})
export class FormulaireFactureComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private toastrService: NbToastrService,
    protected dateService: NbDateService<Date>,
    private facturesService: FacturesService
  ) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }
  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
  Facts: Array<facturat> = [];
  factDialog: boolean;
  submitted: boolean;
  invoice: facturat = {} as facturat;
  range: NbCalendarRange<Date>;
  private index: number = 0;

  hideDialog() {
    this.factDialog = false;
    this.submitted = false;
  }
  saveFacturat(position, status) {
    this.submitted = true;

    if (this.invoice.client) {
      if (this.invoice.id) {
        this.Facts[this.findIndexById(this.invoice.id)] = this.invoice;
        this.index += 1;
        this.toastrService.show(status || "Success", `Toast ${this.index}`, {
          position,
          status,
        });
      }
    } else {
      this.invoice.id = new Date().getMilliseconds();

      this.index += 1;
      this.toastrService.show(status || "Success", `Alert ${this.index}`, {
        position,
        status,
      });
    }
    this.facturesService.saveFacture(this.invoice).subscribe();
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.Facts.length; i++) {
      if (this.Facts[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  createId(): string {
    let id = "";
    var chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  ngOnInit(): void {}
}
