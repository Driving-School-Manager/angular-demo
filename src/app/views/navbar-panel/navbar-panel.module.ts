import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarPanelComponent } from './navbar-panel.component';
import { MenuModule } from 'primeng/menu';





@NgModule({
  declarations: [NavbarPanelComponent],
  exports: [
    NavbarPanelComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavbarPanelComponent,
      }
    ])
  ]
})
export class NavbarPanelModule { }
