import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('./routes/home/home.module').then((module) => module.HomeModule),
    path: ''
  },
  {
    loadChildren: () => import('./routes/signin/signin.module').then((module) => module.SigninModule),
    path: 'signin'
  },
  {
    loadChildren: () => import('./routes/signup/signup.module').then((module) => module.SignupModule),
    path: 'signup'
  },
  {
    loadChildren: () => import('./routes/details/details.module').then((module) => module.DetailsModule),
    path: 'details/:id'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      enableTracing: false,
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'ignore',
      paramsInheritanceStrategy: 'emptyOnly',
      relativeLinkResolution: 'corrected',
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
      urlUpdateStrategy: 'eager',
      useHash: false
    })
  ]
})
export class AppRoutingModule {}
