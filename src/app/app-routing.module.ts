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
    path: 'navbar',
    loadChildren: () =>
      import('./views/navbar-panel/navbar-panel.module').then(m => m.NavbarPanelModule)
  },
  {
    path: 'vehicle-list',
    loadChildren: () =>
      import('./views/vehicle-list/vehicle-list.module').then(m => m.VehicleListModule)
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
      import('./views/student/student-list/student-list.module').then(m => m.StudentListModule)
  },
  {
    path: 'addStudent',
    loadChildren: () =>
      import('./views/student/add-student/add-student.module').then(m => m.AddStudentModule)
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
