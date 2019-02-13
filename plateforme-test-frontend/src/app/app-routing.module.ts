import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'utilisateur', loadChildren: '../app/utilisateur/utilisateur.module#UtilisateurModule' },
  { path: 'test', loadChildren: '../app/test/test.module#TestModule' },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
