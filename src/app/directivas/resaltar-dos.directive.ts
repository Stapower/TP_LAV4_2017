import { Directive, Renderer2, ElementRef, OnInit, Input, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appResaltarDos]'
})
export class ResaltarDosDirective {

  constructor(private obj : ElementRef, private renderizador : Renderer2) { 

  }

  @Input() color : any;//<p [color]='valoresParaPasarleAlInput'>
  funcionOver : Function;
  funcionOut : Function;

  ngOnInit(): void{
    this.renderizador.setStyle(this.obj.nativeElement, 'backgroundColor', this.color);
    this.funcionOut = Function();

    this.funcionOver = this.renderizador.listen(this.obj.nativeElement, 'mouseover',e=>{
        this.renderizador.setStyle(this.obj.nativeElement, 'backgroundColor', 'black');
    });

    this.funcionOut = this.renderizador.listen(this.obj.nativeElement, 'mouseout',e=>{
      this.renderizador.setStyle(this.obj.nativeElement, 'backgroundColor', 'orange');
  });

    //this.renderizador.setProperty(this.obj.nativeElement, 'textContent', '');
  }


  ngOnDestroy(): void{
    this.funcionOut();
    this.funcionOver();
  }

}
