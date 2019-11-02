import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { API_CONFIG } from "../../config/api.config"
import { CadUsuarioComumDTO } from "../../models/cad-usuario-comum.dto";
import { Observable } from "rxjs/Rx";


@Injectable()
export class CadUsuarioComumService {
    
    constructor(public http: HttpClient){

    }

    findAll(): Observable<CadUsuarioComumDTO[]> {
        return this.http.get<CadUsuarioComumDTO[]>("http://localhost:8080/api/usuariocomum");
    }

    insert(obj : CadUsuarioComumDTO){
        return this.http.post(
          'http://localhost:8080/api/usuariocomum/salvar',
          obj,
          {
              observe: 'response',
              responseType: 'text'
          }
        );
    }
}