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
        <span *ngFor="let theme of appService.themes; let i = index"><li   class="settings-item" [id]="theme+'-theme-select'" id="theme+'-theme-select'" (click)="appService.changeTheme(theme+'-theme'); appService.hero='/assets/img/theme/background/'+theme+'.jpg'" matTooltip={{theme}}></li><br *ngIf="i===3"></span>
      </ul>
      <p>Choose a Photo</p>
      <ul>
        <li class="settings-item" (click)="appService.profileImgIndex=0;appService.changeprofileImg();"><img src="/assets/img/brian-francis.jpg"></li>
        <li class="settings-item" (click)="appService.profileImgIndex=1;appService.changeprofileImg();"><img src="/assets/img/brian-francis-alt.jpg"></li>
      </ul>
      <br>
      </mat-dialog-content>
      <button mat-mini-fab  [mat-dialog-close]="true"  ><mat-icon  aria-label="Okay">check</mat-icon></button>
    </div>`,
  styleUrls: ['./settings-dialog.scss']
})
export class SettingsDialog {
  constructor(public dialogRef: MatDialogRef<SettingsDialog>, public appService: AppService) { }
}
