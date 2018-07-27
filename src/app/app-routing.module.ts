import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { IonMenuComponent } from './ion-menu/ion-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: '',
    component: IonMenuComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
      { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
    ]
  },  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
