import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

'use strict';

@Injectable()
export class AppService implements OnDestroy {

  readonly imgDir = '/assets/img/';
  themes = ['beach', 'tropical', 'midnight', 'lush', 'pirate', 'corp', 'tech', 'arizona'];


  private readonly themeSource = new BehaviorSubject<string>('corp-theme');
  readonly currentTheme = this.themeSource.asObservable();
  public changeTheme(theme: string) { this.themeSource.next(theme) }

  profileImg = ['/assets/img/brian-francis.jpg', '/assets/img/brian-francis-alt.jpg'];
  profileImgSq = ['/assets/img/brian-francis-square.jpg', '/assets/img/brian-francis-square.jpg'];

  profileImgIndex = 0;


  isSmall = false;

  private readonly profileImgSource = new BehaviorSubject<string>(this.profileImg[this.profileImgIndex]);
  readonly currentProfileImg = this.profileImgSource.asObservable();
  public changeprofileImg() {
    this.profileImgSource.next(this.isSmall ? this.profileImgSq[this.profileImgIndex] : this.profileImg[this.profileImgIndex]);
  }

  hero = '/assets/img/theme/background/corp.jpg';

  bpSubscription = this.breakpointObserver.observe('(max-width: 768px)').subscribe(result => {
    this.isSmall = result.matches;
    this.changeprofileImg();

  });

  constructor(public breakpointObserver: BreakpointObserver) {

  }

  ngOnDestroy() {
    this.bpSubscription.unsubscribe();
  }
}
