import { Component } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  presentingElement: any;
  message = 'This modal example uses the modalController to present and dismiss modals.';
  name: string;

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('ion-page');
  }


}
