import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

'use strict';

@Injectable()
export class AppService implements OnDestroy {

  private readonly themeSource = new BehaviorSubject<string>('corp-theme');
  readonly currentTheme = this.themeSource.asObservable();
  private changeTheme(theme: string) { this.themeSource.next(theme) }

  profileImg = ['/assets/brian-francis.jpg', '/assets/brian-francis-2.jpg'];
  profileImgSq = ['/assets/brian-francis-sq.jpg', '/assets/brian-francis-2sq.jpg'];

  profileImgIndex = 0;
  hero = 'assets/corp-hero.jpg';

  isSmall = false;

  bpSubscription = this.breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
    this.isSmall = result.matches;
  });

  constructor(public breakpointObserver: BreakpointObserver) {

  }

  ngOnDestroy() {
    this.bpSubscription.unsubscribe();
  }
}
