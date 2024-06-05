import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  providers:[HeroesService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    buscarHeroe(texto:string) {
      console.log(texto);
   } 

}
