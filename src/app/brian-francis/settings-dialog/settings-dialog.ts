import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppService } from '../../app.service';

@Component({
  selector: 'settings-dialog',
  template: `
  <div [class]="theme">
  <span mat-dialog-title>Application Settings</span>
  <div mat-dialog-actions>
    <p>Choose a Theme</p>
    <ul>
      <li class="color" id="beach-theme-select" (click)="appService.changeTheme('beach-theme'); appService.hero='assets/beach-hero.jpg'" matTooltip="Beach" ></li>
      <li class="color" id="tropical-theme-select" (click)="appService.changeTheme('tropical-theme'); appService.hero='assets/tropical-hero.jpg'" matTooltip="Tropical"></li>
      <li class="color" id="midnight-theme-select" (click)="appService.changeTheme('midnight-theme'); appService.hero='assets/midnight-hero.jpg'" matTooltip="Midnight"></li>
      <li class="color" id="lush-theme-select" (click)="appService.changeTheme('lush-theme'); appService.hero='assets/lush-hero.jpg'" matTooltip="Lush"></li><br>
      <li class="color" id="pirate-theme-select" (click)="appService.changeTheme('pirate-theme'); appService.hero='assets/pirate-hero.jpg'" matTooltip="Pirate"></li>
      <li class="color" id="corp-theme-select" (click)="appService.changeTheme('corp-theme'); appService.hero='assets/corp-hero.jpg'" matTooltip="Corp"></li>
      <li class="color" id="tech-theme-select" (click)="appService.changeTheme('tech-theme'); appService.hero='assets/tech-hero.jpg'" matTooltip="Tech"></li>
      <li class="color" id="arizona-theme-select" (click)="appService.changeTheme('arizona-theme'); appService.hero='assets/arizona-hero.jpg'" matTooltip="Arizona"></li>

    </ul>
    <p>Choose a Photo</p>
    <ul>
    <li class="color" id="img1" (click)="appService.photo='assets/brian-francis-pro.jpg'"><img src="assets/brian-francis-pro.jpg" height="50px"></li>
    <li class="color" id="img2" (click)="appService.photo='assets/brian-francis-pro2.jpg'"><img src="assets/brian-francis-pro2.jpg" height="50px"></li>
    </ul>
  </div>
  </div>
  `,
  styleUrls: ['./settings-dialog.scss']
})
export class SettingsDialog {

  theme = 'corp-theme';

  constructor(public dialogRef: MatDialogRef<SettingsDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public appService: AppService) {
  }

  ngOnInit() {
    this.appService.currentTheme.subscribe(theme => { this.theme = theme; });
  }

}
