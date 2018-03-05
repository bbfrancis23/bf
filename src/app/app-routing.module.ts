import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrianFrancisComponent } from './brian-francis/brian-francis.component';

const routes: Routes = [
  { path: '', component: BrianFrancisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
