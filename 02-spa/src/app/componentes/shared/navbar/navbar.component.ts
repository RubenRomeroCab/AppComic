import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,],
  providers:[HeroesService,Router],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

    constructor(private router:Router){

    }
    ngOnInit(): void {
      
    }
  
    //Usamos un evento para evitar la recarga de la pagina 
    buscarHeroe(texto: string, event: Event): void {
      event.preventDefault();
      console.log(texto);
      this.router.navigate(['buscar',texto])
    }

}
