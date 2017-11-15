import { Juego } from '../clases/juego'

export class carta {
    imagen;
    mostrar;
    seleccionada;
    ruta = "../assets/imagenes/";
    posicion;
}

export class JuegoMemoria extends Juego{

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
      console.log(coordenada);
      if(this.coordenadasDisponibles[coordenada].imagen != null)
          coordenada = this.dameCoordenadaVacia();
      
      return coordenada; 
    }
  
    random()
    {
      return Math.floor(Math.random() * (this.maximoDeCartas));      
    }
  
}
