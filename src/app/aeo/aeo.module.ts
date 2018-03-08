import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeoSideDrawer } from './side-drawer/side-drawer';

import { MatIconModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [AeoSideDrawer],
  exports: [AeoSideDrawer]
})
export class AeoModule {
}
