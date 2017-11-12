import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego{

    opcionUsuario : string = "";
    opcionSheldon : string ="";
    opciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    mensaje;
    gano = false;
    empato = false;
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("PPTLS",false,jugador);
      }

    aleatorio(minimo,maximo){
        var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
        var eleccion = this.opciones[numero];
        
        return eleccion;
    }

    verificar()
    {
        return this.gano;
    }
    calcular(opcionUsuario){
        this.opcionUsuario = opcionUsuario;
        this.opcionSheldon = this.aleatorio(0,4);
        //empata
        if(this.opcionUsuario == this.opcionSheldon){
            this.mensaje = "<h2>¡Es un empate!<br /><img src='http://i60.tinypic.com/2m4dhso.png'/></h2>";
        }
        else if(this.opcionUsuario == "Piedra" && this.opcionSheldon == "Tijeras"
                                    ||
                this.opcionUsuario == "Piedra" && this.opcionSheldon == "Lagarto"
                                    ||
                this.opcionUsuario == "Papel" && this.opcionSheldon == "Spock"
                                    ||
                this.opcionUsuario == "Papel" && this.opcionSheldon == "Piedra"
                                    ||
                this.opcionUsuario == "Tijeras" && this.opcionSheldon == "Lagarto"
                                    ||
                this.opcionUsuario == "Tijeras" && this.opcionSheldon == "Papel"
                                    ||
                this.opcionUsuario == "Lagarto" && this.opcionSheldon == "Spock"
                                    ||
                this.opcionUsuario == "Lagarto" && this.opcionSheldon == "Papel"
                                    ||
                this.opcionUsuario == "Spock" && this.opcionSheldon == "Piedra"
                                    ||
                this.opcionUsuario == "Spock" && this.opcionSheldon == "Tijeras"
                )						
        {
    //gana
        this.mensaje = "<h2>¡Has ganado!<br /><img src='http://i62.tinypic.com/1ze8uau.png'/></h2>";
        }
    //pierde
        else
        this.mensaje = "<h2>¡Has perdido!<br /><img src='http://i57.tinypic.com/6r3dcg.png'/></h2>" + "<img src='https://the-big-bang-theory.com/images/uploads/4/th_574e7c36606306d94a4.jpg'/>"; 

        return this.mensaje;            
    }
}
