import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aeo-side-drawer',
  template: `
  <div class="aeo-sidedrawer-container" [ngClass]="{'closed': closed}">
    <button class="aeo-sidedrawer-control" mat-fab (click)="closed = !closed" matTooltipShowDelay="1000" matTooltip="Menu"><mat-icon >{{closed ? 'menu' : 'close'}}</mat-icon></button>
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./side-drawer.scss']
})
export class AeoSideDrawer implements OnInit {

  //@Input() width: number;
  closed = true;
  //_left: number;
  constructor() { }

  ngOnInit() {
  }

  //get left() {
  //  return this.closed ? -Math.abs(this.width) : 0;
  //  }


}
