import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AdminLayoutComponent} from "./adminLayout/admin-layout.component";


const routes: Routes = [

  {path: 'admin', component: AdminLayoutComponent,
    children:[
      {path: '', loadChildren: () => import('./adminLayout/admin-home/admin-home.module').then(m => m.AdminHomeModule)},
      {path: 'vehicles', loadChildren: () => import('./adminLayout/vehicles/vehicle-list/vehicle-list.module').then(m => m.VehicleListModule)},
      {path: 'students', loadChildren: () => import('./adminLayout/students/student-list/student-list.module').then(m => m.StudentListModule)},
      {path: 'addStudent', loadChildren: () => import('./adminLayout/students/add-student/add-student.module').then(m => m.AddStudentModule)},
      ]
    },
  {path: '', loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)},
  {path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)},
  {path: 'notfound', loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: '**', redirectTo: '/notfound'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
