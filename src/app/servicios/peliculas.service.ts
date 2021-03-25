import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../interfaces/pelicula.interface';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PeliculasServise{

  url = "https://peliapp-a71bd-default-rtdb.firebaseio.com/peliculas";

  constructor(private http: HttpClient) {
      console.log("Servicio arriba");
  }


  getPeliculas() {
    return this.http.get<Pelicula[]>(this.url+".json");
  }

  getPelicula(id:number){
    return this.http.get<Pelicula>(this.url+"/"+id+".json");
  }
  agrearPeliculas(movie:Pelicula){
    return this.http.post(this.url+".json",movie);
  }

  actializarPelicula(movie:Pelicula){
    return this.http.put<Pelicula>(this.url+"/"+movie.key$+".json",movie);
  }

  eliminarPelicula(id:number){
    return this.http.delete(this.url+"/"+id+".json")
  }
}
