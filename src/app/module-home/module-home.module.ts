import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleHomeRoutingModule } from './module-home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ModuleHomeRoutingModule
  ]
})
export class ModuleHomeModule { }
