import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KebabModule } from 'projects/ngx-kebab/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KebabModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
