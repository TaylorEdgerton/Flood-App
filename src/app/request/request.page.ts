import { Component, OnInit } from '@angular/core';

// importing modal page and modal controller for request-modal
import {RequestModalPage} from '../request-modal/request-modal.page'
import {ModalController } from '@ionic/angular'

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  Status:boolean = false;
  constructor(private modalController:ModalController) { }
  async presentModal(){
    const modal = await this.modalController.create({
    //The page that is being displayed for the modal
    component: RequestModalPage,
    //values being passed into modal
    componentProps: {status: this.Status}
    });
    //retrieve status when modal is dismissed
    modal.onDidDismiss()
      .then((retval) => {
      this.Status = retval.data;
    });
    return modal.present();
    }
  ngOnInit() {
  }

}
