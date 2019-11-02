import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosSpPage } from './dados-sp';

@NgModule({
  declarations: [
    DadosSpPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosSpPage),
  ],
})
export class DadosSpPageModule {}
