import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MilieuModule } from './milieu/milieu.module';
import { AeoModule } from './aeo/aeo.module';
import { BrianFrancisComponent } from './brian-francis/brian-francis.component';

import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    BrianFrancisComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MilieuModule,
    LayoutModule,
    AeoModule
  ],
  exports: [
    AeoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
