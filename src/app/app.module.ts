import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReversedPipe } from './reversed.pipe';
import { BitacoraAppComponent } from './components/bitacora-app/bitacora-app.component';
import { LectorPdfComponent } from './components/lector-pdf/lector-pdf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { LectorPdfJsComponent } from './components/lector-pdf-js/lector-pdf-js.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversedPipe,
    BitacoraAppComponent,
    LectorPdfComponent,
    LectorPdfJsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
