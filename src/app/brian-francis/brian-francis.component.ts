import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { SettingsDialog } from './settings-dialog/settings-dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppService } from '../app.service';

import { AeoSideDrawer } from '../aeo/side-drawer/side-drawer';

@Component({
  selector: 'app-brian-francis',
  templateUrl: './brian-francis.component.html',
  styleUrls: ['./brian-francis.component.scss']
})
export class BrianFrancisComponent implements OnInit, OnDestroy {

  theme = 'beach-theme';

  animal: string;
  name: string;

  constructor(breakpointObserver: BreakpointObserver, public dialog: MatDialog, public appService: AppService) {
    //breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe(result => this.isHandsetLandscape = result.matches);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SettingsDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //console.log(result);
    });
  }

  ngOnInit() {
    this.appService.currentTheme.subscribe(theme => { this.theme = theme; });
  }

  ngOnDestroy() {
    //this.observerSubscription.unsubscribe();
  }

}
