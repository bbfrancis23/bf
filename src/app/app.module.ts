import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MilieuModule } from './milieu/milieu.module';
import { AeoModule } from './aeo/aeo.module';
import { BrianFrancisModule } from './brian-francis/brian-francis.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MilieuModule,
    AeoModule,
    BrianFrancisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
