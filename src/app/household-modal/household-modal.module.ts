import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseholdModalPageRoutingModule } from './household-modal-routing.module';

import { HouseholdModalPage } from './household-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseholdModalPageRoutingModule
  ],
  declarations: [HouseholdModalPage]
})
export class HouseholdModalPageModule {}
