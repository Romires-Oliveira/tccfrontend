import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadUsuarioComumPage } from './cad-usuario-comum';

@NgModule({
  declarations: [
    CadUsuarioComumPage,
  ],
  imports: [
    IonicPageModule.forChild(CadUsuarioComumPage),
  ],
})
export class CadUsuarioComumPageModule {}
