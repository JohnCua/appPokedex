import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { dashboardRoutes } from './components/pages/dashboard/dashboard.routes';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
      path: '',
      component: DashboardComponent,
      children: dashboardRoutes
  },
  { path: '**', redirectTo: 'resgister' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
