import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculasServise } from '../../servicios/peliculas.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {
  movie:Pelicula={nombre:" ",
                     quali:" ",
                     pais:" "
                    };

  constructor(private _peliculasServise:PeliculasServise) { }

  ngOnInit(): void {
  }

  guardar(){
    this._peliculasServise.agrearPeliculas(this.movie)
    .subscribe(newMovie =>{
      alert("Su dato a sido cargado exitosamente");
    });
  }
}
