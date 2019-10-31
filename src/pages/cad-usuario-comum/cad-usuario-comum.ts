import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadUsuarioComumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cad-usuario-comum',
  templateUrl: 'cad-usuario-comum.html',
})
export class CadUsuarioComumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadUsuarioComumPage');
  }

  servProd(){
    this.navCtrl.setRoot('ServProdPage');
  }

}
