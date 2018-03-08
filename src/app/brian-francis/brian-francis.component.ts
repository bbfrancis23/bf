import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-brian-francis',
  templateUrl: './brian-francis.component.html',
  styleUrls: ['./brian-francis.component.scss']
})
export class BrianFrancisComponent implements OnDestroy {

  //isHandsetLandscape = false;
  //observerSubscription: Subscription;

  constructor(breakpointObserver: BreakpointObserver) {
    //breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe(result => this.isHandsetLandscape = result.matches);
  }

  ngOnDestroy() {
    //this.observerSubscription.unsubscribe();
  }

}
