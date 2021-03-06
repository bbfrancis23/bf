import { Component, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'bf-profile',
  templateUrl: 'profile.html'
})
export class BrianFrancisProfile implements OnDestroy {

  subs = [];
  profileImg = '';

  constructor(public appService: AppService) {
    let sub = this.appService.currentProfileImg.subscribe(
      img => {
        this.profileImg = img;

        console.log(this.profileImg);
      }
    );
    this.subs.push(sub);
  }

  ngOnDestroy() { this.subs.forEach(sub => sub.unsubscribe()) }

}
