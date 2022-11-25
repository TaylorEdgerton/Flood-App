import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from "@ionic/angular"

@Component({
  selector: 'app-household-modal',
  templateUrl: './household-modal.page.html',
  styleUrls: ['./household-modal.page.scss'],
})
export class HouseholdModalPage implements OnInit {

  //Declaring variables used
  firstName="";
  lastName="";
  address="";
  dob="";
  formatteddob="";
  phone="";
  emergContact="";
  mobImpaired="";
  pets="";
  livestock="";
  comments="";

  constructor(private navParams:NavParams, private modalController:ModalController) { }

  //Function that automatically returns entered values from a modal
  ngOnInit() {
    this.firstName = this.navParams.get('firstname');
    this.lastName = this.navParams.get('lastname');
    this.address = this.navParams.get('address');
    this.dob = this.navParams.get('dob')
    this.phone = this.navParams.get('phone');
    this.emergContact = this.navParams.get('emergContact');
    this.mobImpaired = this.navParams.get('mobImpaired');
    this.pets = this.navParams.get('pets');
    this.livestock = this.navParams.get('livestock')
    this.comments = this.navParams.get('comments')
  }
  //Parse the information from the modal to be called by onDidDismiss function
  closeModal(){
    this.modalController.dismiss({firstName:this.firstName, lastName:this.lastName, address:this.address, dob:this.dob, phone:this.phone, emergContact:this.emergContact, mobImpaired:this.mobImpaired, pets:this.pets, livestock:this.livestock, comments:this.comments});
    }

}
