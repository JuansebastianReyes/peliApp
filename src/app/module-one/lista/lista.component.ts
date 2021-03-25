import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculasServise } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {

  movies:Pelicula[]=[];

  movie:Pelicula={nombre:" ",
                     quali:" ",
                     pais:" "
                    };

  constructor(private _peliculasServise:PeliculasServise ) { }

  ngOnInit(): void {

  }

  getPeliculas(){
    this._peliculasServise.getPeliculas()
    .subscribe(peli => this.movies = peli
  );}

  getPelicula(id:number){
    this._peliculasServise.getPelicula(id + 1)
    .subscribe(peli => this.movie = peli
    );}

  openEdit(peli:Pelicula){
    this.movie = peli;
  }

  editar(){
    console.log(this.movie);
    alert("Su dato a sido cargado exitosamente");
  }

  editarPelicula(movie:Pelicula){
    this._peliculasServise.actializarPelicula(movie)
    .subscribe(peli =>{alert("Su dato a sido cargado exitosamente");
    })
  }

  eliminarPelicula(id:number){
    this._peliculasServise.eliminarPelicula(id)
    .subscribe((data)=>{
      alert("Se haa elininado el registro");
    });
  }
}
