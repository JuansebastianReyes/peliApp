import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ListaComponent } from './lista/lista.component';
import { BuscarComponent } from './buscar/buscar.component';


@NgModule({
  declarations: [ListaComponent, BuscarComponent],
  imports: [
    CommonModule,
    ModuleOneRoutingModule,
    FormsModule
  ]
})
export class ModuleOneModule { }
