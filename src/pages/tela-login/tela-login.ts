import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController} from 'ionic-angular';
import { TelaLoginService } from '../../services/domain/tela-login.service';
import { CredenciaisDTO } from '../../models/credenciais.dto';

/**
 * Generated class for the TelaLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-login',
  templateUrl: 'tela-login.html',
})
export class TelaLoginPage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
     public menu: MenuController,
     public telaloginService : TelaLoginService) {
  }

  ionViewWillEnter() {    
    this.menu.swipeEnable(false);   
} 

ionViewDidLeave() {     
 this.menu.swipeEnable(true);   
}

ionViewDidLoad() {
  this.telaloginService.findAll()
  .subscribe(response => {
    console.log(response);
},
error => {
  console.log(error);
}); 
}

telascat(){
  console.log(this.creds);
  this.navCtrl.setRoot('CategoriaPage');
}

}
