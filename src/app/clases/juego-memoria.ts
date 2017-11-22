import { Juego } from '../clases/juego'

export class carta {
    imagen;
    mostrar;
    seleccionada;
    ruta = "./assets/imagenes/";
    posicion;
    fija;
}

export class JuegoMemoria extends Juego{

    gano;
    perdio;
    tiempo;
    maximoDeCartas = 20;
    coordenadasDisponibles : Array<carta>;

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
    



    verificarVictoria()
    {
        var victoria=0;
        for(var index =0 ; index < this.coordenadasDisponibles.length ; index++){
            if(this.coordenadasDisponibles[index].mostrar)
                victoria++;
            }
        if(victoria == this.coordenadasDisponibles.length)
        {
            this.gano=true;
        }
        return this.gano;
    }


    verificar()
    {
        return this.gano;
    }

    ocultar(carta1:carta, carta2: carta)
    {
        this.coordenadasDisponibles[carta1.posicion].mostrar=false;
        this.coordenadasDisponibles[carta2.posicion].mostrar=false;
    }

    limpiarEspacio()
    { 
      this.coordenadasDisponibles = new Array<carta>(this.maximoDeCartas);
      for(var index = 0 ; index < this.coordenadasDisponibles.length; index ++)
      {
        this.coordenadasDisponibles[index] = new carta();
      }     
    }
  
    generarParejas()
    {
      for(var index =0 ; index < 10 ; index++){
          var pareja = this.parejas[index];
          
          var coordeanda1 = this.dameCoordenadaVacia();          
          this.coordenadasDisponibles[coordeanda1].imagen = pareja;
          this.coordenadasDisponibles[coordeanda1].posicion = coordeanda1;
  
          var coordeanda2 = this.dameCoordenadaVacia();
          this.coordenadasDisponibles[coordeanda2].imagen = pareja;
          this.coordenadasDisponibles[coordeanda2].posicion = coordeanda2;
        }
    }
  
    dameCoordenadaVacia()
    {
      var coordenada = this.random();
      if(this.coordenadasDisponibles[coordenada].imagen != null)
          coordenada = this.dameCoordenadaVacia();
      
      return coordenada; 
    }
  
    random()
    {
      return Math.floor(Math.random() * (this.maximoDeCartas));      
    }
  
}
