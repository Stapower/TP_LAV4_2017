import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'
import {JuegoServiceService} from "../../servicios/juego-service.service";


@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  nuevoJuego : JuegoAnagrama;
  Mensajes;

  constructor(public jws:JuegoServiceService) {
    this.nuevoJuego = new JuegoAnagrama();
    this.nuevoJuego.generarPalabra();
    this.nuevoJuego.palabraIngresada = "";
    this.nuevoJuego.gano = false;
   }
   verificar(){
     this.nuevoJuego.verificar();
     if(this.nuevoJuego.gano){
      this.MostarMensaje("Tenemos un ganador! :)", this.nuevoJuego.gano);
      this.jws.guardar(10, 'anagrama');      
     }
     else if(this.nuevoJuego.vidas <= 0)
     {
        this.MostarMensaje("Perdiste, volvé a intentarlo!", this.nuevoJuego.gano);
     }
     
   }
   GenerarPalabra(){
    this.nuevoJuego = new JuegoAnagrama();   
    this.nuevoJuego.generarPalabra();
   }

   MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
     console.info("objeto",x);
     
   }  

  ngOnInit() {
  }

}
