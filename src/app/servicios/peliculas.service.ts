import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../interfaces/pelicula.interface';

@Injectable()
export class PeliculasServise{

  //url = "https://peliapp-a71bd-default-rtdb.firebaseio.com/peliculas"; //firebase
  //url = "http://localhost:3000/movies/"; //local
  url  = "https://sheltered-plains-49044.herokuapp.com/movies/"; //prueba con go

  constructor(private http: HttpClient) {
      console.log("Servicio arriba");
  }


  getPeliculas(){
    //return this.http.get<Pelicula[]>(this.url+".json");
    return this.http.get<Pelicula[]>(this.url);
  }

  getPelicula(id:number){
    //return this.http.get<Pelicula>(this.url+"/"+id+".json");
    return this.http.get<Pelicula>(this.url+id);
  }
  agrearPeliculas(movie:Pelicula){
    //return this.http.post(this.url+".json",movie);
    return this.http.post(this.url, movie);
  }

  actializarPelicula(id:number, movie:Pelicula){
    //return this.http.put<Pelicula>(this.url+"/"+movie.key$+".json",movie);
    return this.http.put<Pelicula>(this.url + id, movie);
  }

  eliminarPelicula(id:number){
    //return this.http.delete(this.url+"/"+id+".json")
    return this.http.delete(this.url + id)
  }
}
