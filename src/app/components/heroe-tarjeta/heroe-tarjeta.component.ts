import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any;
  @Output() evtHeroeSeleccionado: EventEmitter<number>;

  constructor() {
    this.evtHeroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  verHeroe(id: number) {
    this.evtHeroeSeleccionado.emit(id);
  }

}
