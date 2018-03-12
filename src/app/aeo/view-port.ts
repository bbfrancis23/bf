import { Component } from '@angular/core';


@Component({
  selector: 'aeo-view-port',
  template: `
  <div>
    <ng-content>
    </ng-content>
  </div>
  `,
  styles: [`
    div{
      box-sizing: border-box;
      display: flex;
      width: 100vw;
      height: 100vh;
      justify-content: center;
    }`
  ]
})
export class AeoViewPort {

}
