import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseholdModalPage } from './household-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HouseholdModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseholdModalPageRoutingModule {}
