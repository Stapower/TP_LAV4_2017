import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


//import {MiHttpService} from "./mi-http.service";

@Injectable()
export class JuegoServiceService {

  constructor(public http: Http) { }
  url = "https://pps-tomas.000webhostapp.com/MisJuegos/juegos.php/";
  public listar(): Promise<any> {
    
    return this.http
    .get(this.url + "GetScores")
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);

    /*let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
    return miArray;*/
  }

  public listarPromesa(): Promise<Array<Juego>> {
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

  public login(url : string, objeto : any)
  {
    return this.http
    .post(url,objeto)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }

  public guardar(puntos : number, juego : string)
  {
    var jugador =  localStorage.getItem('usuario');
    var url = "https://pps-tomas.000webhostapp.com/MisJuegos/juegos.php/SaveGamesScore/"+jugador+','+puntos+','+juego;
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  
  }
  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }
}
