import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { API_CONFIG } from "../../config/api.config"
import { ServProdDTO } from "../../models/serv-prod.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServProdService {

    constructor(public http: HttpClient){

    }

    findAll(): Observable<ServProdDTO[]> {
        return this.http.get<ServProdDTO[]>("http://localhost:8080/api/servprod");
    }

}