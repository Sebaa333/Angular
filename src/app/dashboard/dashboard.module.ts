import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DatosModule } from './pages/datos/datos.module';
import { TablaModule } from './pages/tabla/tabla.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DatosModule,
    TablaModule,
    
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
