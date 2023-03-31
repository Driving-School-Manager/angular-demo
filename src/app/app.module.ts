import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { PrimeNGConfig } from "primeng/api";
import {NavbarPanelModule} from "./views/navbar-panel/navbar-panel.module";
import { LayoutComponent } from './layout/layout.component';


const primeNGConfigFactory = (primeConfig: PrimeNGConfig) => () => {
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NavbarPanelModule,
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
