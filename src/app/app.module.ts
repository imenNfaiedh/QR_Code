import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QrGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      // Remplace NgxQRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
