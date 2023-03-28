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
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./views/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./views/student-list/student-list.module').then(m => m.StudentListModule)
  },
  {
    path: 'students/:id',
    loadChildren: () =>
      import('./views/student-details/student-details.module').then(m => m.StudentDetailsModule)
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
