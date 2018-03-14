import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MilieuModule } from './milieu/milieu.module';
import { AeoModule } from './aeo/aeo.module';
import { BrianFrancisComponent } from './brian-francis/brian-francis.component';
import { SettingsDialog } from './brian-francis/settings-dialog/settings-dialog';

import { LayoutModule } from '@angular/cdk/layout';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    BrianFrancisComponent,
    SettingsDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
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


  entryComponents: [SettingsDialog],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
