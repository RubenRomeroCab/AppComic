import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AbautComponent } from './componentes/abaut/abaut.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscadorComponent } from './componentes/shared/buscador/buscador.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
      },

    {
        path: 'abaut',
        component: AbautComponent,
        },
    {
        path: 'heroes',
        component: HeroesComponent,
    },
    {
        path:'heroes/heroe/:id',
        component:HeroeComponent,
    },
    {
        path:'buscar/:termino',
        component:BuscadorComponent,
    },
    

    {path: '**',pathMatch :'full',redirectTo:'home'}

];


