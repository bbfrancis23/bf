import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

'use strict';

@Injectable()
export class AppService {
  theme = 'beach-theme';
  photo = 'brian-francis.jpg';
}
