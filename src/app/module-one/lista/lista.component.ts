import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { ToastrService } from 'ngx-toastr';
import { PeliculasServise } from '../../servicios/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {

  movies:Pelicula[]=[];

  constructor(private _peliculasServise:PeliculasServise, private toastr :ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(){
    this._peliculasServise.getPeliculas()
    .subscribe(peli =>{
      this.movies = peli;
      console.log(peli);
    });
  }


  eliminarPelicula(id:number){
    this._peliculasServise.eliminarPelicula(id)
    .subscribe(data => {
      this.toastr.error('El producto Fue eliminado con exito!!','Producto Eliminado')
      this.getPeliculas();
    });
    this.toastr.error('El producto Fue eliminado con exito!!','Producto Eliminado')
    this.router.navigate(['/']);
  }
}
