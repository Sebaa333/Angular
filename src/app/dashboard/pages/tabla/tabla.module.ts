import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TablaComponent } from './tabla.component';


@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    TablaComponent,
  ]
  
})
export class TablaModule { }
