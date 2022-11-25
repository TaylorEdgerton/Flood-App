import { Component } from '@angular/core';
//Importing household-modal page and modal controller
import {HouseholdModalPage} from '../household-modal/household-modal.page'
import {ModalController } from '@ionic/angular'


interface household{
  firstName:string;
  lastName:string;
  address:string;
  dob:string;
  phone:number|null;
  emergContact:number|null;
  mobImpaired:boolean|null;
  pets:boolean|null;
  livestock:boolean|null;
  comments:string;
}
@Component({
  selector: 'app-household',
  templateUrl: './household.page.html',
  styleUrls: ['./household.page.scss'],
})
export class HouseholdPage {

  //Declaring variables and types for the households object
  
  //Declaring the households array of objects
  households:household[] = [{ firstName:'', lastName:'', address:'', dob:'', phone:null, emergContact:null, mobImpaired:null, pets:null, livestock:null, comments:''}]

  message:string=("Click below to add new household member")

  // functioned used to clean up ngIf statements in household.page.html
  printList(){
    if (this.households.length > 1){
      return true;
    }
      else{return false}
    }
  

  constructor(private modalController:ModalController) {}
  
  //Function for creating the modal screen
  async addHousehold(){
    const addModal = await this.modalController.create({
      component: HouseholdModalPage,
      componentProps: {}
    })
    //Function for dismissing the modal screen and retrieving data entered in the modal
    addModal.onDidDismiss().then((retval)=>{
      this.households.push(retval.data)
    });
      return addModal.present();
  }
  // Delete function for removing data from the households array
  delete(i:number){
    this.households.splice(i,1)
  }
  // Edit function for creating a modal for editing specific household data
  async edit(i:number){
    const editbtn = await this.modalController.create({
      component: HouseholdModalPage,
      componentProps: { 
        firstName: this.households[i].firstName,
        lastName:this.households[i].lastName, 
        address:this.households[i].address,
        dob:this.households[i].dob,
        phone:this.households[i].phone,
        emergContact:this.households[i].emergContact,
        mobImpaired:this.households[i].mobImpaired,
        pets: this.households[i].pets,
        livestock: this.households[i].livestock,
        comments:this.households[i].comments,
      }
    });
    // dismissing edit modal and retrieving data from it
    editbtn.onDidDismiss().then((retval)=>{
      this.households[i].firstName = retval.data.firstName
      this.households[i].lastName = retval.data.lastName
      this.households[i].address = retval.data.address
      this.households[i].dob = retval.data.dob
      this.households[i].phone = retval.data.phone
      this.households[i].emergContact = retval.data.emergContact
      this.households[i].mobImpaired = retval.data.mobImpaired
      this.households[i].pets = retval.data.pets
      this.households[i].livestock = retval.data.livestock
      this.households[i].comments = retval.data.comments
    });
      return editbtn.present();
  }

  
}



