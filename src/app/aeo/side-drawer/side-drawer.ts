import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aeo-side-drawer',
  templateUrl: './side-drawer.html',
  styleUrls: ['./side-drawer.scss']
})
export class AeoSideDrawer implements OnInit {

  @Input() width: number;
  _closed = true;
  left: number;
  constructor() { }

  ngOnInit() {
    this.left = this._closed ? -Math.abs(this.width) : 0;
  }

  set closed(b) {
    this._closed = b;

    if (b) {
      this.left = -Math.abs(this.width);
    } else {
      this.left = 0;
    }
  }

  get closed() { return this._closed; }
}
