import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-filter-results',
  templateUrl: './heroe-filter-results.component.html',
  styles: []
})
export class HeroeFilterResultsComponent implements OnInit {

  termino: string;
  heroes: Heroe[];

  constructor(private actv: ActivatedRoute, private _heroesServicio: HeroesService,
              private router: Router) {

  }

  ngOnInit() {
    this.actv.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesServicio.buscarHeroes(this.termino);
    });

  }

  mostrarDetalleHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}
