import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculasServise } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  url = "https://peliapp-a71bd-default-rtdb.firebaseio.com/peliculas";
  movies:Pelicula[]=[];

  movie:Pelicula={nombre:" ",
                     quali:" ",
                     pais:" "
                    };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getPeliculas() {
    return this.http.get<Pelicula[]>(this.url+".json");
  }
}
