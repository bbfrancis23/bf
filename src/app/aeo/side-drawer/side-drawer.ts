import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aeo-side-drawer',
  templateUrl: './side-drawer.html',
  styleUrls: ['./side-drawer.scss']
})
export class AeoSideDrawer implements OnInit {

  @Input() width: number;
  closed = true;
  _left: number;
  constructor() { }

  ngOnInit() {
  }

  get left() {
    return this.closed ? -Math.abs(this.width) : 0;
  }


}
