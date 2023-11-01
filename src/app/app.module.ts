import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations:
  [AppComponent,
    ],
  imports:
   [BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DashboardModule,
  ], // Agrega FormsModule a los imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}