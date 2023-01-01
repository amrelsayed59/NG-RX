import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthenticatedGuard } from '@core/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@app/auth/auth.module')
      .then(m => m.AuthModule),
    canActivate: [NotAuthenticatedGuard],
  },
  {
    path: '',
    loadChildren: () => import('@app/landing/landing.module')
      .then(m => m.LandingModule),
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
