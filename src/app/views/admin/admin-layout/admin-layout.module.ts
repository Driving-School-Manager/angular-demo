import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {AdminLayoutComponent} from "./admin-layout.component";
import {RouterOutlet} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {MenuModule} from "primeng/menu";

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminLayoutComponent,
  ],
  exports: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MenubarModule,
    MenuModule,
  ]
})
export class AdminLayoutModule {
}
