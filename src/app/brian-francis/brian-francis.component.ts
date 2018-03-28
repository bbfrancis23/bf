import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { SettingsDialog } from './settings-dialog/settings-dialog';
import { MatDialogRef, MAT_DIALOG_DATA, DialogPosition } from '@angular/material';

import { AppService } from '../app.service';

import { AeoSideDrawer } from '../aeo/side-drawer/side-drawer';

@Component({
  selector: 'app-brian-francis',
  templateUrl: './brian-francis.component.html',
  styleUrls: ['./brian-francis.component.scss']
})
export class BrianFrancisComponent implements OnInit, OnDestroy {

  subs = [];
  profileImg = '';

  constructor(public breakpointObserver: BreakpointObserver, public dialog: MatDialog, public appService: AppService) {

    let sub = this.appService.currentProfileImg.subscribe(img => this.profileImg = img);
    this.subs.push(sub);

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SettingsDialog, { width: '250px', position: { top: '20px', left: '90px' }, hasBackdrop: false });
  }

  ngOnInit() {

  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }

}
