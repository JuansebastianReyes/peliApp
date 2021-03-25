import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { TopComponent } from './top/top.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [TopComponent, AgregarComponent],
  imports: [
    CommonModule,
    ModuleTwoRoutingModule,
    FormsModule
  ]
})
export class ModuleTwoModule { }
