import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeoToggleButtonComponent } from './aeo-toggle-button/aeo-toggle-button.component';

import { MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { AeoSidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: [AeoToggleButtonComponent, AeoSidebarComponent],
  exports: [AeoToggleButtonComponent]
})
export class AeoModule {
}
