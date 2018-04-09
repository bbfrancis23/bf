import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

'use strict';

@Injectable()
export class AppService implements OnDestroy {

  themes = ['beach', 'tropical', 'midnight', 'lush', 'pirate', 'corp', 'tech', 'arizona'];


  private readonly themeSource = new BehaviorSubject<string>('corp-theme');
  readonly currentTheme = this.themeSource.asObservable();
  public changeTheme(theme: string) { this.themeSource.next(theme) }

  profileImg = ['/assets/brian-francis.jpg', '/assets/brian-francis-2.jpg'];
  profileImgSq = ['/assets/brian-francis-sq.jpg', '/assets/brian-francis-2sq.jpg'];

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
