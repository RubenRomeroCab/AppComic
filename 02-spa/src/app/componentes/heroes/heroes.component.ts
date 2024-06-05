import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService ,Heroe} from'../../servicios/heroes.service';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent implements OnInit {
  heroes: Heroe [] =[]
  constructor( private _heroesService:HeroesService, private router:Router){
  }
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  
  verHeroe(idx:number){
    this.router.navigate(['heroe',idx])
    console.log(idx)
  }
  
}
