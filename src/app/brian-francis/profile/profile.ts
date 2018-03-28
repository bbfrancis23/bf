import { Component } from '@angular/core';


import { AppService } from '../../app.service';

@Component({
  selector: 'bf-profile',
  templateUrl: 'profile.html'
})
export class BrianFrancisProfile {

  subs = [];
  profileImg = '';

  constructor(public appService: AppService) {
    let sub = this.appService.currentProfileImg.subscribe(img => this.profileImg = img);
    this.subs.push(sub);
  }

}
