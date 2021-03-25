import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
  {path: 'buscar', component: BuscarComponent},
  {path: 'lista', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule { }
