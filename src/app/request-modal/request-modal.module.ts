import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestModalPageRoutingModule } from './request-modal-routing.module';

import { RequestModalPage } from './request-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestModalPageRoutingModule
  ],
  declarations: [RequestModalPage]
})
export class RequestModalPageModule {}
