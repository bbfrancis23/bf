import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AppService } from '../../app.service';

@Component({
  selector: 'settings-dialog',
  template: `
  <div class="text-center">
    <span mat-dialog-title>Application Settings</span>
    <mat-dialog-content>
      <p>Choose a Theme</p>
      <ul>
        <li class="settings-item" id="beach-theme-select" (click)="appService.changeTheme('beach-theme'); appService.hero='assets/beach-hero.jpg'" matTooltip="Beach" ></li>
        <li class="settings-item" id="tropical-theme-select" (click)="appService.changeTheme('tropical-theme'); appService.hero='assets/tropical-hero.jpg'" matTooltip="Tropical"></li>
        <li class="settings-item" id="midnight-theme-select" (click)="appService.changeTheme('midnight-theme'); appService.hero='assets/midnight-hero.jpg'" matTooltip="Midnight"></li>
        <li class="settings-item" id="lush-theme-select" (click)="appService.changeTheme('lush-theme'); appService.hero='assets/lush-hero.jpg'" matTooltip="Lush"></li><br>
        <li class="settings-item" id="pirate-theme-select" (click)="appService.changeTheme('pirate-theme'); appService.hero='assets/pirate-hero.jpg'" matTooltip="Pirate"></li>
        <li class="settings-item" id="corp-theme-select" (click)="appService.changeTheme('corp-theme'); appService.hero='assets/corp-hero.jpg'" matTooltip="Corp"></li>
        <li class="settings-item" id="tech-theme-select" (click)="appService.changeTheme('tech-theme'); appService.hero='assets/tech-hero.jpg'" matTooltip="Tech"></li>
        <li class="settings-item" id="arizona-theme-select" (click)="appService.changeTheme('arizona-theme'); appService.hero='assets/arizona-hero.jpg'" matTooltip="Arizona"></li>
      </ul>
      <p>Choose a Photo</p>
      <ul>
        <li class="settings-item" (click)="appService.profileImgIndex=0;appService.changeprofileImg();"><img src="assets/brian-francis.jpg"></li>
        <li class="settings-item" (click)="appService.profileImgIndex=1;appService.changeprofileImg();"><img src="assets/brian-francis-2.jpg"></li>
      </ul>
      <br>
      </mat-dialog-content>
      <br>
      <button mat-mini-fab  [mat-dialog-close]="true"  ><mat-icon  aria-label="Okay">check</mat-icon></button>
    </div>`,
  styleUrls: ['./settings-dialog.scss']
})
export class SettingsDialog { constructor(public dialogRef: MatDialogRef<SettingsDialog>, public appService: AppService) { } }
