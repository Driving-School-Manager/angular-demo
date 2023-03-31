import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";


const routes: Routes = [

  {path: '', component: LayoutComponent,
    children:[
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
      {path: 'vehicle-list', loadChildren: () => import('./views/vehicle-list/vehicle-list.module').then(m => m.VehicleListModule)},
      {path: 'students', loadChildren: () => import('./views/student/student-list/student-list.module').then(m => m.StudentListModule)},
      {path: 'addStudent', loadChildren: () => import('./views/student/add-student/add-student.module').then(m => m.AddStudentModule)},
      ]
    },
  {path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)},
  {path: 'landing', loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)},
  {path: 'notfound', loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)},
  {path: '**', redirectTo: '/notfound'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
