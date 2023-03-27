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
    path: 'studentList',
    loadChildren: () =>
      import('./views/student-list/student-list.module').then(m => m.StudentListModule)
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
