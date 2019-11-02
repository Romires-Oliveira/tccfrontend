import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadUsuarioComumService } from '../../services/domain/cad-usuario-comum.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-cad-usuario-comum',
  templateUrl: 'cad-usuario-comum.html',
})
export class CadUsuarioComumPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public cadUsuarioComumService: CadUsuarioComumService,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public alertCtrl: AlertController) {


    //Validação de campos  
    this.formGroup = this.formBuilder.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      sexo: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]],
      tipoUsuario: ['', [Validators.required]]
    });
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

  cadUser(){
      this.cadUsuarioComumService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertok();
      });
  }

  showInsertok(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso'!,
      message: 'Cadastro efetuando com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.setRoot("ServProdPage");
          }
        }
      ]
    });
    alert.present();
  }
}
