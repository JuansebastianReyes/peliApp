import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./module-home/module-home.module').then(m => m.ModuleHomeModule)
  },
  {
    path: `modulo1`, loadChildren: () =>
      import('./module-one/module-one.module').then(m => m.ModuleOneModule)
  },
  {
    path: `modulo1`, loadChildren: () =>
      import('./module-one/module-one.module').then(m => m.ModuleOneModule)
  },
  {
    path: `modulo2`, loadChildren: () =>
      import('./module-two/module-two.module').then(m => m.ModuleTwoModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
