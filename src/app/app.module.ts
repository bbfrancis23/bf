import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

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

import { OverlayContainer } from '@angular/cdk/overlay';

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
export class AppModule {
  //constructor(public overlayContainer: OverlayContainer, public appService: AppService) {

  //this.appService.currentTheme.subscribe(theme => { console.log(theme); this.overlayContainer.getContainerElement().classList.add(theme); });

  //overlayContainer.getContainerElement().classList.add(appService.theme);
  //overlayContainer.getContainerElement().classList.add('tropical-theme');
  //overlayContainer.getContainerElement().classList.add('midnight-theme');
  //overlayContainer.getContainerElement().classList.add('lush-theme');
  //}

  //ngOnInit() {

  //}
  // */
}
