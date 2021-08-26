import { Supplier } from "./../supplier.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AchatService {
  constructor(private http: HttpClient) {}
  apicall() {
    return this.http.get<{ totalCount: number; items: Array<Supplier> }>(
      "https://192.168.1.56:7898/api/app/factureAchat "
    );
  }
  saveAchat(supps: Supplier) {
    return this.http.post("http://localhost:3000/items", supps);
  }
  getFournisseur(id: number) {
    return this.http.get<Supplier>("http://localhost:3000/items");
  }
}
