import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculasServise } from '../../servicios/peliculas.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  peliculaForm: FormGroup;
  titulo='Agregar Pelicula';
  id: string | null;

  movie:Pelicula={   Name:" ",
                     Contry:" ",
                     Rating:""
                    };

  constructor(private _peliculasServise:PeliculasServise, private fb: FormBuilder, private router: Router,
               private toastr: ToastrService, private aRouter: ActivatedRoute) {
    this.peliculaForm = this.fb.group({
      Name: ['',Validators.required],
      Contry: ['', Validators.required],
      Rating: ['',Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarPelicula(){
    const MOVIE: Pelicula ={
      Name : this.peliculaForm.get('Name')?.value,
      Contry: this.peliculaForm.get('Contry')?.value,
      Rating: this.peliculaForm.get('Rating')?.value
    }
    if(this.id !== null){
      this._peliculasServise.actializarPelicula(Number(this.id),MOVIE)
      .subscribe(data =>{
        this.toastr.info('La pelicula fue actualizada con exito!', 'Pelicula Acrualizado!');
        this.router.navigate(['/modulo1/lista']);
      }), error =>{
        console.log(error)
        this.peliculaForm.reset();
      }
    }else{
      console.log(MOVIE);
      this._peliculasServise.agrearPeliculas(MOVIE)
      .subscribe(newMovie =>{
        console.log("Agregado")
        this.toastr.success('La pelicula fue registrada con exito!', 'Pelicula Registrada!');
        this.router.navigate(['/modulo1/lista']);
      }), error =>{
        console.log(error)
        this.peliculaForm.reset();
      }
    }
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Producto"
      this._peliculasServise.getPelicula(Number(this.id))
      .subscribe(data =>{
        this.peliculaForm.setValue({
          Name: data.Name,
          Contry: data.Contry,
          Rating: data.Rating
        })
      })
    }
  }

  /*guardar(){

  }*/
}
