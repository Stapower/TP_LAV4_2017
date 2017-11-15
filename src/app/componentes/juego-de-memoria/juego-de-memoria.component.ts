import { Component, OnInit } from '@angular/core';
import { JuegoMemoria } from '../../clases/juego-Memoria';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-juego-de-memoria',
  templateUrl: './juego-de-memoria.component.html',
  styleUrls: ['./juego-de-memoria.component.css']
})
export class JuegoDeMemoriaComponent implements OnInit {

  constructor() {
    this.juego = new JuegoMemoria();
    this.juego.limpiarEspacio();
    this.juego.generarParejas();
   }

  juego;
  primerCarta;
  Tiempo: number;
  repetidor:any;
  ngOnInit() {
  }

  meSelecciono(carta : any)
  {
    console.log(carta);
    this.Tiempo = 10;
    carta.mostrar = true;   
    //this.temporizador();
    setTimeout(() => 
    {
      this.seQuedaAlguna(carta);
    },
    5000); 
  }

  temporizador()
  {
    /*let timer = Observable.timer(2000,1000);
    timer.subscribe(t => this.tickerFunc(t));   */
    setTimeout(()=>{}, 4000)
  }

  seQuedaAlguna(carta: any)
  {
    if(this.primerCarta != null){
      if(this.primerCarta.posicion != carta.posicion && this.primerCarta.imagen == carta.imagen){
            carta.mostrar = true;
        }
        else{
          this.juego.ocultar(this.primerCarta,carta);
          this.primerCarta = null;
        }
    }
    else{
      this.primerCarta = carta;
    }
  }


  /*public rows: number[] = [1, 2, 3, 4];
  public columns: number [] = [1, 2, 3, 4, 5];

  maxRows = 4;
  maxCol = 5;
  coordenadasDisponibles : Array<string>;
   Int32Array;
   ruta = "../assets/imagenes/";
  parejas = ['TypeScript.png',
  'SlimFramework.jpg',
  'php.jpg',
  'MySql.png',
  'JavaScript.jpg',
  'Java.jpg',
  'html5.jpg',
  'css3.png',
  'Angular2.jpg',
  'Python.jpg'];

  lastPicturedSelected = null;
  
  

  limpiarEspacio()
  { 
    this.coordenadasDisponibles = new Array<string>(this.maxRows*this.maxCol);
    console.log('coordenadasDisponibles ' + this.coordenadasDisponibles );
    
  }

  meSelecciono(coordenada)
  {
    
  }

  generarParejas()
  {
    for(var index =0 ; index < 10 ; index++){
        var pareja = this.parejas[index];
        console.log(index);
        var coordeanda1 = this.dameCoordenadaVacia();          
        this.coordenadasDisponibles[coordeanda1]=this.ruta + pareja;

        var coordeanda2 = this.dameCoordenadaVacia();
        this.coordenadasDisponibles[coordeanda2]=this.ruta + pareja;
      }
  }

  dameCoordenadaVacia()
  {
    var coordenada = this.random();
    if(this.coordenadasDisponibles[coordenada] != null)
        coordenada = this.dameCoordenadaVacia();
    
    return coordenada; 
  }

  random()
  {
    return Math.floor(Math.random() * ((this.maxCol*this.maxRows)));      
  }*/

}
