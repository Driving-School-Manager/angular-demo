import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {PrimeNGConfig} from "primeng/api";
import {HttpClientModule} from "@angular/common/http"

const primeNGConfigFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent,
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
