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

  isSmall = false;

  photo


  constructor(public breakpointObserver: BreakpointObserver, public dialog: MatDialog, public appService: AppService) {
    breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
      this.isSmall = result.matches;
      if (this.isSmall) {
        //appService.profileImgSm = true;
        //appService.changePhoto();
      } else {
        //appService.profileImgSm = false;
        //appService.changePhoto();
      }
    });

    //breakpointObserver.observe('(min-width: 768px)').subscribe(result => {
    //  this.isSmall = result.matches;
    //  appService.photo = 'assets/brian-francis-sq.jpg';
    //});
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SettingsDialog, { width: '250px', position: { top: '20px', left: '90px' }, hasBackdrop: false });
  }

  ngOnInit() {
    //console.log(this.appService.currentPhoto);
  }

  ngOnDestroy() {

  }

}
