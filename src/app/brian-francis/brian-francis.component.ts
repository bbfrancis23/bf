import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { SettingsDialog } from '../settings-dialog/settings-dialog';
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
      { src: `${this.appService.imgDir}iBOATS/home.jpg`, title: 'Home', link: 'http://boats.iboats.com' },
      { src: `${this.appService.imgDir}iBOATS/account-info.jpg`, title: 'Account Info', link: 'https://boats.iboats.com/sell-a-boat2/login.cgi' },
      { src: `${this.appService.imgDir}iBOATS/ad.jpg`, title: 'Ad', link: 'http://boats.iboats.com/1987-grady-white-232-gulfstream-panama-city-beach-fl/1942219.html' },
      { src: `${this.appService.imgDir}iBOATS/advanced-search.jpg`, title: 'Advanced Search', link: 'http://boats.iboats.com/aluminum-boats/' },
      { src: `${this.appService.imgDir}iBOATS/check-out.jpg`, title: 'Check Out', link: 'https://boats.iboats.com/sell-a-boat2/login.cgi' },
      { src: `${this.appService.imgDir}iBOATS/create-record.jpg`, title: 'Create Ad', link: 'http://boats.iboats.com/sell-a-boat/' },
      { src: `${this.appService.imgDir}iBOATS/description.jpg`, title: 'Ad Description', link: 'http://boats.iboats.com/1987-grady-white-232-gulfstream-panama-city-beach-fl/1942219.html' },
      { src: `${this.appService.imgDir}iBOATS/featured.jpg`, title: 'Featured Ad', link: 'http://boats.iboats.com/boats/featured.cgi' },
      { src: `${this.appService.imgDir}iBOATS/options.jpg`, title: 'Ad Options', link: 'http://boats.iboats.com/1987-grady-white-232-gulfstream-panama-city-beach-fl/1942219.html' },
      { src: `${this.appService.imgDir}iBOATS/promo.jpg`, title: 'Promo', link: 'https://boats.iboats.com/sell-a-boat2/login.cgi' },
      { src: `${this.appService.imgDir}iBOATS/record.jpg`, title: 'Research Item', link: 'http://boats.iboats.com/research/2018-newport-vessel-dana/1869650.html' },
      { src: `${this.appService.imgDir}iBOATS/research.jpg`, title: 'Research', link: 'http://boats.iboats.com/research/' },
      { src: `${this.appService.imgDir}iBOATS/type-listings.jpg`, title: 'Type Listing', link: 'http://boats.iboats.com/bass-boats/' },
      { src: `${this.appService.imgDir}iBOATS/research-type-listing.jpg`, title: 'Research Type Listing', link: 'http://boats.iboats.com/research/bass-boats/t200033/' },

    ],
    'jody': [
      { src: `${this.appService.imgDir}jody/home.jpg`, title: 'Home', link: 'http://magichandshealing.com/' },
      { src: `${this.appService.imgDir}jody/product.jpg`, title: 'Product', link: 'http://magichandshealing.com/reiki-healing.html' },
      { src: `${this.appService.imgDir}jody/testimonials.jpg`, title: 'Testimonials', link: 'http://magichandshealing.com/success-stories.html' },
      { src: `${this.appService.imgDir}jody/contact-us.jpg`, title: 'Contact Us', link: 'http://magichandshealing.com/contact.php' },
    ], 'aeo': [
      { src: `${this.appService.imgDir}AEO/welcome.jpg`, title: 'Home', link: 'http://aeo-tech.com/' },
      { src: `${this.appService.imgDir}AEO/account-info.jpg`, title: 'Account Info', link: 'http://aeo-tech.com/' },
      { src: `${this.appService.imgDir}AEO/drawer-menu.jpg`, title: 'Sidebar Menu', link: 'http://aeo-tech.com/code-jems/tech/angular/type/best-practices' },
      { src: `${this.appService.imgDir}AEO/global-search.jpg`, title: 'Global Search', link: 'http://aeo-tech.com/' },
      { src: `${this.appService.imgDir}AEO/log-in-modal.jpg`, title: 'Log In Menu', link: 'http://aeo-tech.com/' },
      { src: `${this.appService.imgDir}AEO/menu-bar.jpg`, title: 'Menu Bar', link: 'http://aeo-tech.com/' },
      { src: `${this.appService.imgDir}AEO/mobile-menu.jpg`, title: 'Mobile Menu', link: 'http://aeo-tech.com/' },
      { src: `${this.appService.imgDir}AEO/programming.jpg`, title: 'Programming', link: 'http://aeo-tech.com/code-jems/tech/angular/type/best-practices' },
      { src: `${this.appService.imgDir}AEO/programming-list.jpg`, title: 'Programming List', link: 'http://aeo-tech.com/code-jems/tech/angular/type/best-practices' },
      { src: `${this.appService.imgDir}AEO/sign-up.jpg`, title: 'Sign Up', link: 'http://aeo-tech.com/account' },
      { src: `${this.appService.imgDir}AEO/programming-type.jpg`, title: 'Programming Type List', link: 'http://aeo-tech.com/code-jems/tech/angular/type/best-practices' },

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
