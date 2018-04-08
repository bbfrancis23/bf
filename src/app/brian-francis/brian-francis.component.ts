import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { SettingsDialog } from './settings-dialog/settings-dialog';
import { ImgViewerDialog } from './img-viewer-dialog/img-viewer-dialog';
import { MatDialogRef, MAT_DIALOG_DATA, DialogPosition } from '@angular/material';

import { AppService } from '../app.service';

import { AeoSideDrawer } from '../aeo/side-drawer/side-drawer';

class img {
  alt?: '';
  src: '';
  height?: number;
  width?: number;
  title?: '';
}

@Component({
  selector: 'app-brian-francis',
  templateUrl: './brian-francis.component.html',
  styleUrls: ['./brian-francis.component.scss']
})
export class BrianFrancisComponent {

  portfolio = {
    'iboats': [
      { src: '/assets/iboats1.png', title: 'FEATURED BOATS' },
      { src: '/assets/iboats2.png', title: 'BOAT BRANDS FOR SALE' },
      { src: '/assets/iboats3.png', title: 'BOAT AD' },
      { src: '/assets/iboats4.png', title: 'DEALER BOATS BY CONDITION AND TYPE IN STATE - CITY FOR SALE' },
      { src: '/assets/iboats5.png', title: 'BOAT TYPES FOR SALE' },
      { src: '/assets/iboats6.png', title: 'SALE A BOAT SIGN UP' },
      { src: '/assets/iboats7.png', title: 'SALE A BOAT ACCOUNT ACCOUNT INFO' },
      { src: '/assets/iboats8.png', title: 'PURCHASE A BOAT AD' },
      { src: '/assets/iboats9.png', title: 'CREATE A BOAT AD' },
      { src: '/assets/iboats10.png', title: 'NEW BOAT RESEARCH' },
      { src: '/assets/iboats11.png', title: 'BOATING CLASSIFIEDS' }
    ],
    'jody': [
      { src: '/assets/jody1.png', title: 'MAGIC HEALING HANDS' },
      { src: '/assets/jody2.png', title: 'REIKI' },
      { src: '/assets/jody3.png', title: 'TESTIMONIALS' },
      { src: '/assets/jody4.png', title: 'CONTACT' }
    ], 'aeo': [
      { src: '/assets/aeo1.png', title: 'AEO_TECH' },
      { src: '/assets/aeo2.png', title: 'QUICK SEARCH' },
      { src: '/assets/aeo3.png', title: 'FILTER PULLOUT DRAWER FOR MOBILE' },
      { src: '/assets/aeo4.png', title: 'ACCOUNT INFO' },
      { src: '/assets/aeo5.png', title: 'FILTERED LIST' },
      { src: '/assets/aeo6.png', title: 'LOGIN MODAL' },
      { src: '/assets/aeo7.png', title: 'ACCOUT INFO WIDE SCREEN' },
      { src: '/assets/aeo8.png', title: 'FAVORITES FILTER CLOSED' },
      { src: '/assets/aeo9.png', title: 'MENU DROPDOWN' },
    ]
  };


  constructor(public dialog: MatDialog, public appService: AppService) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(SettingsDialog, { width: '250px', position: { top: '20px', left: '90px' }, hasBackdrop: false });
  }

  openIboatsImgDialog() {
    let dialogRef = this.dialog.open(ImgViewerDialog, { data: { images: this.portfolio.iboats, title: 'iBOATS' } });
  }

  openJodyImgDialog() {
    let dialogRef = this.dialog.open(ImgViewerDialog, { data: { images: this.portfolio.jody, title: 'MAGIC HEALING HANDS' } });
  }

  openAeoImgDialog() {
    let dialogRef = this.dialog.open(ImgViewerDialog, { data: { images: this.portfolio.aeo, title: 'AEO-TECH' } });
  }
}
