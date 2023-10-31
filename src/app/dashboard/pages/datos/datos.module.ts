import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { DatosComponent } from './datos.component';


@NgModule({
  declarations: [DatosComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    DatosComponent,

  ]
  
})
export class DatosModule { }
