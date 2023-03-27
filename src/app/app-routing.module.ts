import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./views/student-panel/student-panel.module').then(m => m.StudentPanelModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./views/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./views/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./views/not-found/not-found.module').then(m => m.NotFoundModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
