import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HeroesService} from '../../servicios/heroes.service'
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [RouterLink,CommonModule],

  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent  {
  
  heroe:any={};
 
  constructor(private activateRoute :ActivatedRoute,
            private _heroesService:HeroesService
            
  ){
  this.activateRoute.params.subscribe(params => {
    console.log(params['id'])
    this.heroe= this._heroesService.getHeroe(params['id']);
    })
  }

}
