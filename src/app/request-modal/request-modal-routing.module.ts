import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestModalPage } from './request-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RequestModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestModalPageRoutingModule {}
