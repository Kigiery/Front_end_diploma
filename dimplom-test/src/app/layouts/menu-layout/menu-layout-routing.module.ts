import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuLayoutComponent } from './menu-layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'studentInfo',
      },
      {
        path: 'studentInfo',
        loadChildren: '../../features/student-info/student-info.module#StudentInfoModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuLayoutRoutingModule { }
