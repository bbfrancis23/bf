import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MilieuModule } from './milieu/milieu.module';
import { AeoModule } from './aeo/aeo.module';
import { BrianFrancisComponent } from './brian-francis/brian-francis.component';

@NgModule({
  declarations: [
    AppComponent,
    BrianFrancisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MilieuModule,
    AeoModule
  ],
  exports: [
    AeoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
