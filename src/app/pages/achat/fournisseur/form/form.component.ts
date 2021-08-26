import { AchatService } from "./../achat.service";
import { Supplier } from "./../../supplier.model";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private toastrService: NbToastrService,
    private achatService: AchatService
  ) {}
  selectedItemNgModel;
  submitted: boolean;
  provider: Supplier = {} as Supplier;
  private index: number = 0;
  supps: Array<Supplier> = [];

  saveAchat(position, status) {
    this.submitted = true;

    if (this.provider.fournisseur) {
      if (this.provider.id) {
        this.supps[this.findIndexById(this.provider.id)] = this.provider;
        this.index += 1;
        this.toastrService.show(status || "Success", `Toast ${this.index}`, {
          position,
          status,
        });
      }
    } else {
      this.provider.id = new Date().getMilliseconds();

      this.index += 1;
      this.toastrService.show(status || "Success", `Alert ${this.index}`, {
        position,
        status,
      });
    }
    this.achatService.saveAchat(this.provider).subscribe();
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.supps.length; i++) {
      if (this.supps[i].id === id) {
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

  selectedItemFormControl = new FormControl();
  ngOnInit(): void {}
}
