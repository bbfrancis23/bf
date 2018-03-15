import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { AppService } from './app.service';

import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  lastTheme = 'beach-theme';

  constructor(public appService: AppService, private overlayContainer: OverlayContainer) {
    this.appService.currentTheme.subscribe(theme => {

      if (this.lastTheme) {
        this.overlayContainer.getContainerElement().classList.remove(this.lastTheme);
        document.body.classList.remove(this.lastTheme);
      }

      this.lastTheme = theme;
      this.overlayContainer.getContainerElement().classList.add(theme);
      document.body.classList.add(theme);

      //if(theme )

      //document.body.style.backgroundColor = "#424242";


    });
  }

  ngOnInit() {


    this.overlayContainer.getContainerElement().classList.add('beach-theme');
    document.body.classList.add('mat-app-background', 'beach-theme');


    //  this.appService.currentTheme.subscribe(theme => { console.log(this.overlayContainer); this.overlayContainer.getContainerElement().className. });
  }
}
