import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { PrimeNGConfig } from "primeng/api";
import {AdminSidebarModule} from "./adminLayout/admin-sidebar/admin-sidebar.module";
import { AdminLayoutComponent } from './adminLayout/admin-layout.component';


const primeNGConfigFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: primeNGConfigFactory,
      deps: [PrimeNGConfig],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}
