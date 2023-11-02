import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TablaComponent } from './tabla.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports:[
    TablaComponent,
  ]
  
})
export class TablaModule { }
