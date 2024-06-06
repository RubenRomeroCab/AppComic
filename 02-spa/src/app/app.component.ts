import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { AbautComponent } from './componentes/abaut/abaut.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BuscadorComponent } from './componentes/shared/buscador/buscador.component';
import { HeroeTarjetaComponent } from './componentes/heroe-tarjeta/heroe-tarjeta.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NavbarComponent,AbautComponent,HomeComponent,HeroeComponent,FooterComponent,BuscadorComponent,HeroeTarjetaComponent],
  providers:[HeroesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'spa';
}
