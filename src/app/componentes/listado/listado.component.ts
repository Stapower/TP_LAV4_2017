import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   miServicioJuego:JuegoServiceService
  constructor(servicioJuego:JuegoServiceService) { 
    this.miServicioJuego = servicioJuego;}
  
  ngOnInit() {
    
  }

  llamaService(){
    console.log("llamaService");
    this.miServicioJuego.listar().then((listado) => {
      this.listadoParaCompartir = listado;
    });    
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
   });
  }
    
}
