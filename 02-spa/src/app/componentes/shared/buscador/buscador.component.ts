import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],

  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent  implements OnInit{
   heroes:any[] =[]
  
  constructor(private activateRouter:ActivatedRoute,
              private _heroesService:HeroesService

  ){


  }
  
  ngOnInit(): void {
    
    this.activateRouter.params.subscribe(params =>{
     // console.log(params['termino'])
      this.heroes=this._heroesService.buscarHeroe(params['termino'])
      console.log(this.heroes)

    })
  }

}
