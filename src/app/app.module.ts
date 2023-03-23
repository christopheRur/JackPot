import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightsComponent } from './modules/lights/lights.component';
import { NumberPotComponent } from './modules/number-pot/number-pot.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberPotComponent,
    LightsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
