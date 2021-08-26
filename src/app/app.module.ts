import { NbCardModule } from "@nebular/theme";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { TableModule } from "primeng/table";
import { MenuItem } from "primeng/api";
import { AccordionModule } from "primeng/accordion";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ToolbarModule } from "primeng/toolbar";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import {
  NbCalendarModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCalendarRangeModule,
  NbInputModule,
  NbAutocompleteModule,
  NbTabsetModule,
} from "@nebular/theme";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY",
    }),
    NbDatepickerModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbToastrModule.forRoot(),
    AccordionModule,
    TableModule,
    ButtonModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbInputModule,
    NbDatepickerModule,
    NbAutocompleteModule,
    NbTabsetModule,
    NbCardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
