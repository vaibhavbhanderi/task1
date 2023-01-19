import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FristcomponentComponent } from './fristcomponent/fristcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FristcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
