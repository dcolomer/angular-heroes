import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe-detalle.component.html',
  styles: []
})
export class HeroeDetalleComponent implements OnInit {

  heroe: Heroe;

  constructor(private actv: ActivatedRoute, private _heroesService: HeroesService, private _location: Location) {
    this.actv.params.subscribe(params => {
      const i = params.id;
      this.heroe = _heroesService.getHeroe(i);
    });
  }

  ngOnInit() {
  }

  volver() {
    this._location.back();
  }
}
