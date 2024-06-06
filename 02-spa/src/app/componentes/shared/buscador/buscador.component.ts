import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../../servicios/heroes.service';
import { CommonModule } from '@angular/common';
import { RouterLink ,} from '@angular/router';
import { HeroeTarjetaComponent } from '../../heroe-tarjeta/heroe-tarjeta.component';





@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule,RouterLink,HeroeTarjetaComponent],

  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent  implements OnInit{
  
   heroes:Heroe[] =[]
    termino!:string;
    idx!:number;

  
  constructor(private activateRouter:ActivatedRoute,
              private _heroesService:HeroesService,   
  ){
 

  }
 
 
  
  ngOnInit(): void {
    this.activateRouter.params.subscribe(params =>{
     // console.log(params['termino'])
     this.termino = params['termino']
      this.heroes=this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroes)
      

    })
  }

}
