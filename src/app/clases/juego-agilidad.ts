import { Juego } from '../clases/juego'

export class JuegoAgilidad extends Juego{
    operador;
    numero1;
    numero2;
    respuesta;
    respuestaCorrecta;
    gano=false;
    operadores = ["+", "-", "/", "*"];

    generarAgilidad()
    {
      var operador = this.generarnumero(3);
      this.numero1 = this.generarnumero(100);
      this.numero2 = this.generarnumero(100);
      this.operador = this.operadores[operador];
      console.info("operador "+this.operador);
      console.info("numero1 "+this.numero1);
      console.info("numero2 "+this.numero2);
      
      switch(this.operador)
      {
        case "+":
            this.respuestaCorrecta = this.numero1 + this.numero2;
        break;

        case "-":
        this.respuestaCorrecta = this.numero1 - this.numero2;
        break;

        case "/":
        this.respuestaCorrecta = Math.round(this.numero1 / this.numero2);
        break;

        case "*":
        this.respuestaCorrecta = this.numero1 * this.numero2;
        break;
      }
    }

    verificar()
    {
      this.gano = (this.respuesta == this.respuestaCorrecta);
      console.info(this.gano);
        return this.gano;
    }
    generarnumero(max) {
      return Math.floor((Math.random() * max) + 1);
    }
}
