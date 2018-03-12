import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeoSideDrawer } from './side-drawer/side-drawer';
import { AeoViewPort } from './view-port';

import { MatIconModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [AeoSideDrawer, AeoViewPort],
  exports: [AeoSideDrawer, AeoViewPort]
})
export class AeoModule {
}
