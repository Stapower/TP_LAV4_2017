import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/Juego-piedra-papel-tijera'
import {Observable} from 'rxjs/Rx';
import {JuegoServiceService} from "../../servicios/juego-service.service";

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
nuevoJuego;
  constructor( public jws:JuegoServiceService) { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }

mostrar(){
	document.getElementById('inicial').style.display='none';
	document.getElementById('juego').style.display='block';
}
volver(){
	document.getElementById('resultado').style.display='none';
	document.getElementById('juego').style.display='block';
}
instrucciones(){
	document.getElementById('resultado').style.display='none';
  document.getElementById('inicial').style.display='block';
  document.getElementById('juego').style.display='none';
}

jugar(opcionUsuario){
  this.nuevoJuego.gano = false;
  this.nuevoJuego.calcular(opcionUsuario);
  if(this.nuevoJuego.gano)
    this.jws.guardar(10, 'PPTLS');  

 	document.getElementById('juego').style.display = "none";		
  document.getElementById('resultado').style.display = "block";
  document.getElementById('inicial').style.display='none';
  
	document.getElementById('resultado').innerHTML = 
	"<p><span>Tú</span> has elegido " + "<span>" + opcionUsuario + "</span>" + 
	" y <span>Sheldon Cooper</span> ha elegido " + "<span>" + this.nuevoJuego.opcionSheldon + "</span>" 
	+ ".</p>" + this.nuevoJuego.mensaje;

}
  ngOnInit() {
  }

}
