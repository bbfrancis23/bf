import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppService } from '../../app.service';

@Component({
  selector: 'settings-dialog',
  template: `

  <span mat-dialog-title>Application Settings</span>
  <div mat-dialog-actions>
    <ul>
      <li class="color" id="beach-theme-select" (click)="appService.theme='beach-theme'" ></li>
      <li class="color" id="tropical-theme-select" (click)="appService.theme='tropical-theme'"></li>
      <li class="color" id="midnight-theme-select" (click)="appService.theme='midnight-theme'"></li>
      <li class="color" id="lush-theme-select" (click)="appService.theme='lush-theme'"></li>
    </ul>
  </div>
  `,
  styleUrls: ['./settings-dialog.scss']
})
export class SettingsDialog {



  constructor(public dialogRef: MatDialogRef<SettingsDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public appService: AppService) {
  }


}
