import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AeoModule } from './aeo/aeo.module';
import { BrianFrancisComponent } from './brian-francis/brian-francis.component';
import { BrianFrancisProfile } from './brian-francis/profile/profile';

import { SettingsDialog } from './brian-francis/settings-dialog/settings-dialog';
import { ImgViewerDialog } from './brian-francis/img-viewer-dialog/img-viewer-dialog';

import { LayoutModule } from '@angular/cdk/layout';

import { AppService } from './app.service';

import { OverlayContainer } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    AppComponent,
    BrianFrancisComponent,
    BrianFrancisProfile,
    SettingsDialog,
    ImgViewerDialog
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
    MatTooltipModule,
    LayoutModule,
    AeoModule
  ],
  exports: [
    AeoModule
  ],


  entryComponents: [SettingsDialog, ImgViewerDialog],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
