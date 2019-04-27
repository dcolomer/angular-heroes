import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  RUTAS: any;

  constructor(private router: Router) {
    this.RUTAS = Object.values(Rutas);
  }

  ngOnInit() {
  }

  peticionBuscarHeroe(termino: string) {
    this.router.navigate(['/heroe-filter', termino]);
  }
}

export enum Rutas {
  Home = 'home',
  Heroes = 'heroes',
  About = 'about'
}

