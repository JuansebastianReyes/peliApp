import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top/top.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes: Routes = [
  { path:'top', component:TopComponent },
  { path:'agregar', component:AgregarComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTwoRoutingModule { }
