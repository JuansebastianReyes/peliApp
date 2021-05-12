import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculasServise } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  movies:Pelicula[]=[];

  constructor(private _peliculasServise:PeliculasServise) { }

  ngOnInit(): void {
    this.getPeliculas()
  }


  getPeliculas(){
    this._peliculasServise.getPeliculas()
    .subscribe(peli =>{
      this.movies = peli;
      console.log(peli);
    });
  }
}
