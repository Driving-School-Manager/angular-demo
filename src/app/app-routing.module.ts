import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AdminLayoutComponent} from "./views/admin/admin-layout/admin-layout.component";


const routes: Routes = [

  {path: 'admin', component: AdminLayoutComponent,
    children:[
      {path: '', loadChildren: () => import('./views/admin/admin-views/admin-home/admin-home.module').then(m => m.AdminHomeModule)},
      {path: 'vehicles', loadChildren: () => import('./views/admin/admin-views/vehicles/vehicle-list/vehicle-list.module').then(m => m.VehicleListModule)},
      {path: 'students', loadChildren: () => import('./views/admin/admin-views/students/student-list/student-list.module').then(m => m.StudentListModule)},
      {path: 'addStudent', loadChildren: () => import('./views/admin/admin-views/students/add-student/add-student.module').then(m => m.AddStudentModule)},
      ]
    },
  {path: '', loadChildren: () => import('./views/default/landing/landing.module').then(m => m.LandingModule)},
  {path: 'login', loadChildren: () => import('./views/default/login/login.module').then(m => m.LoginModule)},
  {path: 'notfound', loadChildren: () => import('./views/default/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: '**', redirectTo: '/notfound'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
