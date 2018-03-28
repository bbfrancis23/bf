import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

'use strict';

@Injectable()
export class AppService {

  private readonly themeSource = new BehaviorSubject<string>('corp-theme');
  readonly currentTheme = this.themeSource.asObservable();
  private changeTheme(theme: string) { this.themeSource.next(theme) }

  profileImg = ['/assets/brian-francis.jpg', '/assets/brian-francis-2.jpg'];
  profileImgSq = ['/assets/brian-francis-sq.jpg', '/assets/brian-francis-2sq.jpg'];

  profileImgIndex = 0;





  hero = 'assets/corp-hero.jpg';
}
