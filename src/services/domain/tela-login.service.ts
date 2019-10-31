import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { API_CONFIG } from "../../config/api.config"
import { Observable } from "rxjs/Rx";
import { TelaLoginDTO } from "../../models/tela-login.dto";


@Injectable()
export class TelaLoginService {
    
    constructor(public http: HttpClient){

    }

    findAll(): Observable<TelaLoginDTO[]> {
        return this.http.get<TelaLoginDTO[]>("http://localhost:8080/api/usuariocomum");
    }
}