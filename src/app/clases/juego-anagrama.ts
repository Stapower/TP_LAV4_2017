import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego {
    palabraSecreta : string = "";
    palabraAnagramada : string ="";
    palabraIngresada = "";
    palabras : Array<string>;
    palabrasAnagramadas : Array <string>;
    vidas = 5;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",false,jugador);
        this.generarPalabra();
      }

    public listaDePalabras()
    {
        this.palabras = new Array<string>();
        this.palabrasAnagramadas = new Array<string>();
        this.palabras[0] = "manta"; //matan
        this.palabras[1] = "rama";  //amar
        this.palabras[2] = "miedo"; //miedo
        this.palabras[3] = "ida"; //dia
        this.palabras[4] = "pleno"; //pelo
        this.palabras[5] = "pedro"; //poder
        this.palabras[6] = "ironicamente"; //nacimiento
        this.palabras[7] = "acuerdo"; //ecuador
        this.palabras[8] = "Energéticamente"; //genéricamente

        this.palabrasAnagramadas[0] ="matan";
        this.palabrasAnagramadas[1] ="amar";
        this.palabrasAnagramadas[2] ="medio";
        this.palabrasAnagramadas[3] ="dia";
        this.palabrasAnagramadas[4] ="pelo";
        this.palabrasAnagramadas[5] ="poder";
        this.palabrasAnagramadas[6] ="nacimiento";
        this.palabrasAnagramadas[7] ="ecuador";
        this.palabrasAnagramadas[8] ="genericamente";
    }
    public verificar() {
        if (this.palabraIngresada == this.palabraAnagramada) {
          this.gano = true;
          return this.gano;
        }
        this.vidas--;
        return this.gano;
     }
     public generarPalabra(){
        var random = Math.floor((Math.random() * 8) + 1);
        console.log(random);
        this.listaDePalabras();
        this.palabraSecreta = this.palabras[random];
        this.palabraAnagramada = this.palabrasAnagramadas[random];
        this.gano = false;
      }
}
