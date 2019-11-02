import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { ServProdDTO } from '../../models/serv-prod.dto';
import { HttpClient } from '@angular/common/http';
import { CategoriaDTO } from '../../models/categoria.dto';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public categoriaService: CategoriaService,
     public http: HttpClient) {
  }

items: CategoriaDTO[];

  ionViewDidLoad() {
    this.categoriaService.findAll()
    .subscribe(response => {
      this.items = response;
  },
  error => {
    console.log(error);
  }); 
  }

 servprodt(){
  this.navCtrl.push('ServProdPage');
}
  
}
