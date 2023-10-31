import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DatosComponent } from './pages/datos/datos.component';
import { DatosModule } from './pages/datos/datos.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DatosModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
