import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { facturat } from "./factures/facurat.model";

@Injectable({
  providedIn: "root",
})
export class FacturesService {
  constructor(private http: HttpClient) {}
  apicall() {
    return this.http.get<{ totalCount: number; items: Array<facturat> }>(
      "https://192.168.1.56:7898/api/app/facture"
    );
  }
  saveFacture(invoice: facturat) {
    return this.http.post("http://localhost:3000/items", invoice);
  }
}
