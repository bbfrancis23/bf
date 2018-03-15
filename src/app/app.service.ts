import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

'use strict';

@Injectable()
export class AppService {
  private readonly themeSource = new BehaviorSubject<string>('beach-theme');
  readonly currentTheme = this.themeSource.asObservable();
  private changeTheme(theme: string) { this.themeSource.next(theme) }


  photo = 'brian-francis.jpg';
}
