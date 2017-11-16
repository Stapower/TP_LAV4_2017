import { Component, OnInit } from '@angular/core';
import { JuegoMemoria } from '../../clases/juego-Memoria';
import {Observable} from 'rxjs/Rx';
import {JuegoServiceService} from "../../servicios/juego-service.service";


@Component({
  selector: 'app-juego-de-memoria',
  templateUrl: './juego-de-memoria.component.html',
  styleUrls: ['./juego-de-memoria.component.css']
})
export class JuegoDeMemoriaComponent implements OnInit {

  constructor( public jws:JuegoServiceService) {
    this.reiniciar();
    /*this.juego = new JuegoMemoria();
    this.juego.limpiarEspacio();
    this.juego.generarParejas();
    this.crono();*/
   }

  juego;
  primerCarta;
  segundero = 60;
  contador;
  Tiempo=60; 
  repetidor;
  

  ngOnInit() {
  }

  meSelecciono(carta : any)
  {
    if(!this.juego.perdio)
    {
      carta.mostrar = true;   
      setTimeout(() => 
      {
        this.seQuedaAlguna(carta);
      },
      300); 
    }
  }

  seQuedaAlguna(carta: any)
  {
    if(!carta.fija)
    {
      if(this.primerCarta != null){
        if(this.primerCarta.posicion != carta.posicion && this.primerCarta.imagen == carta.imagen){

              this.juego.coordenadasDisponibles[carta.posicion].mostrar = true;
              this.juego.coordenadasDisponibles[this.primerCarta.posicion].mostrar = true;

              this.juego.coordenadasDisponibles[carta.posicion].fija = true;
              this.juego.coordenadasDisponibles[this.primerCarta.posicion].fija = true;
              
              
              if(this.juego.verificarVictoria())
              {
                this.guardar();
              }
          }
          else{
            this.juego.ocultar(this.primerCarta,carta);
            this.primerCarta = null;
          }
          this.primerCarta = null;      
      }
      else{
        this.primerCarta = carta;
      }
    }
  }

  guardar()
  {
    this.jws.guardar(this.Tiempo*2, 'memoria');
  }

  reiniciar()
  {
    this.juego = new JuegoMemoria();
    this.juego.limpiarEspacio();
    this.juego.generarParejas();
    this.mostrarTodo(true);

      setTimeout(() => 
      {
        this.mostrarTodo(false);
      },
      2000);

    this.crono();  
  }

  mostrarTodo(boleano : boolean){
    for(var index =0 ; index < this.juego.coordenadasDisponibles.length ; index++){
      this.juego.coordenadasDisponibles[index].mostrar=boleano;
    }
  }
  
  crono(){
    var segundero = this.segundero;
    var jue = this.juego;  
    var l = document.getElementById("cronometro");
    

    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.juego.perdio=true;
        this.Tiempo=60;
      }
      }, 900);

  }
    /*var contador = setInterval( function() {
      --segundero;
      if (segundero === 0){
          clearInterval(contador);  
          l.innerHTML = segundero.toString();
          jue.gano=false;
      }
    }, 100);
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
