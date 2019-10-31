import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadUsuarioComumService } from '../../services/domain/cad-usuario-comum.service';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public cadUsuarioComumService: CadUsuarioComumService) {
  }

  servProd(){
    this.navCtrl.setRoot('ServProdPage');
  }

  ionViewDidLoad() {
    this.cadUsuarioComumService.findAll()
    .subscribe(response => {
      console.log(response);
  },
  error => {
    console.log(error);
  }); 
  }

}
