import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import {HeroeDetalleComponent} from './components/heroe-detalle/heroe-detalle.component';

import { Rutas } from './components/shared/navbar/navbar.component';
import {HeroeFilterResultsComponent} from './components/heroe-filter-results/heroe-filter-results.component';

const APP_ROUTES: Routes = [
  { path: Rutas.Home, component: HomeComponent},
  { path: Rutas.Heroes, component: HeroesComponent},
  { path: Rutas.About, component: AboutComponent},
  { path: 'heroe/:id', component: HeroeDetalleComponent},
  { path: 'heroe-filter/:termino', component: HeroeFilterResultsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
