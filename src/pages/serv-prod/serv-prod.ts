import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServProdService } from '../../services/domain/serv-prod.service';
import { ServProdDTO } from '../../models/serv-prod.dto';

@IonicPage()
@Component({
  selector: 'page-serv-prod',
  templateUrl: 'serv-prod.html',
})
export class ServProdPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public serprodService: ServProdService) {
  }

  items: ServProdDTO[];

  ionViewDidLoad() {
    this.serprodService.findAll()
    .subscribe(response => {
      this.items = response;
  },
  error => {
    console.log(error);
  }); 
  }

  dadosSP(){
    this.navCtrl.push('DadosSpPage');
  }

}
