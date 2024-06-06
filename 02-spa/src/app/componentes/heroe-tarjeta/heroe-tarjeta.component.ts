import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { RouterLink  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe-tarjeta',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './heroe-tarjeta.component.html',
  styleUrl: './heroe-tarjeta.component.css'
})
export class HeroeTarjetaComponent implements OnInit{
  @Input() heroe: any = {};
  @Input() index!: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  verHeroe() {
    // console.log(  this.index );
    this.router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
