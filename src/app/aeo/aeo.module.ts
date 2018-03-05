import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeoToggleButtonComponent } from './aeo-toggle-button/aeo-toggle-button.component';

import { MatButtonModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: [AeoToggleButtonComponent],
  exports: [AeoToggleButtonComponent]
})
export class AeoModule {
}
