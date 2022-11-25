import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController} from "@ionic/angular"

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.page.html',
  styleUrls: ['./request-modal.page.scss'],
})
export class RequestModalPage implements OnInit {
  status:boolean=false;

  constructor(private navParams:NavParams,
    private modalController:ModalController) { }

  ngOnInit() {
    this.status=true
    this.status = this.navParams.get('status')
  }
  closeModal(){
    this.modalController.dismiss(this.status);
    }

}
