import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppService } from '../../app.service';

@Component({
  selector: 'settings-dialog',
  template: `
  <div [class]="theme">
  <span mat-dialog-title>Application Settings</span>
  <div mat-dialog-actions>
    <ul>
      <li class="color" id="beach-theme-select" (click)="appService.changeTheme('beach-theme');" ></li>
      <li class="color" id="tropical-theme-select" (click)="appService.changeTheme('tropical-theme')"></li>
      <li class="color" id="midnight-theme-select" (click)="appService.changeTheme('midnight-theme')"></li>
      <li class="color" id="lush-theme-select" (click)="appService.changeTheme('lush-theme')"></li><br>
      <li class="color" id="img1" (click)="appService.photo='assets/brian-francis-pro.jpg'"><img src="assets/brian-francis-pro.jpg" height="50px"></li>
      <li class="color" id="img2" (click)="appService.photo='assets/brian-francis-pro2.jpg'"><img src="assets/brian-francis-pro2.jpg" height="50px"></li>
    </ul>
  </div>
  </div>
  `,
  styleUrls: ['./settings-dialog.scss']
})
export class SettingsDialog {

  theme = 'beach-theme';

  constructor(public dialogRef: MatDialogRef<SettingsDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public appService: AppService) {
  }

  ngOnInit() {
    this.appService.currentTheme.subscribe(theme => { this.theme = theme; });
  }

}
