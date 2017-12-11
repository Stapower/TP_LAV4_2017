import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    try{
      $('#header').addClass('fadeInRight');      
    }
    catch(ex){
      console.log('ex'+ex);
    }
    
    console.log('rollIn');
  }

  Juego(tipo : string){
    if(tipo == "JuegoDeMemoria")
     this.router.navigate(['/Juegos/JuegoDeMemoria']);
  }

}
