(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{heOV:function(t,e,i){"use strict";i.r(e),i.d(e,"ModuleTwoModule",(function(){return v}));var o=i("ofXK"),r=i("3Pt+"),a=i("tyNb"),l=i("fXoL"),b=i("sdot");function c(t,e){if(1&t&&(l.Nb(0,"tr"),l.Nb(1,"td"),l.ic(2),l.Mb(),l.Nb(3,"td"),l.ic(4),l.Mb(),l.Nb(5,"td"),l.ic(6),l.Mb(),l.Mb()),2&t){const t=e.$implicit;l.xb(2),l.jc(t.Name),l.xb(2),l.jc(t.Contry),l.xb(2),l.jc(t.Rating)}}function n(t,e){if(1&t&&(l.Nb(0,"table",5),l.Nb(1,"thead",6),l.Nb(2,"tr"),l.Nb(3,"th",7),l.ic(4,"Nombre"),l.Mb(),l.Nb(5,"th",7),l.ic(6,"Pais"),l.Mb(),l.Nb(7,"th",7),l.ic(8,"Rating"),l.Mb(),l.Mb(),l.Mb(),l.Nb(9,"tbody"),l.hc(10,c,7,3,"tr",8),l.Mb(),l.Mb()),2&t){const t=l.Wb();l.xb(10),l.Xb("ngForOf",t.movies)}}function s(t,e){1&t&&(l.Nb(0,"div",9),l.Nb(1,"div",10),l.Nb(2,"h5"),l.ic(3," No hay peliculas por mostrar "),l.Mb(),l.Nb(4,"button",11),l.ic(5,"Nuevo"),l.Mb(),l.Mb(),l.Mb())}let u=(()=>{class t{constructor(t){this._peliculasServise=t,this.movies=[]}ngOnInit(){this.getPeliculas()}getPeliculas(){this._peliculasServise.getPeliculas().subscribe(t=>{this.movies=t,console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(l.Ib(b.a))},t.\u0275cmp=l.Cb({type:t,selectors:[["app-top"]],decls:7,vars:2,consts:[[1,"container"],[1,"titulo","text-center"],[1,"table-responsive"],["class","table table-bordered table-striped",4,"ngIf"],["class","card text-white bg-dark",4,"ngIf"],[1,"table","table-bordered","table-striped"],[1,"table-dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"card","text-white","bg-dark"],[1,"card-body","text-center"],["type","button","routerLink","/modulo2/agregar",1,"btn","btn-success"]],template:function(t,e){1&t&&(l.Nb(0,"div",0),l.Nb(1,"div",1),l.Nb(2,"h3"),l.ic(3,"Top Peliculas"),l.Mb(),l.Mb(),l.Nb(4,"div",2),l.hc(5,n,11,1,"table",3),l.Mb(),l.hc(6,s,6,0,"div",4),l.Mb()),2&t&&(l.xb(5),l.Xb("ngIf",e.movies.length>0),l.xb(1),l.Xb("ngIf",0==e.movies.length))},directives:[o.i,o.h,a.c],styles:[""]}),t})();var d=i("5eHb");function g(t,e){1&t&&(l.Nb(0,"div",14),l.Nb(1,"span"),l.ic(2,"El Nombre del la pelicula es "),l.Nb(3,"strong"),l.ic(4,"Obligatorio"),l.Mb(),l.Mb(),l.Mb())}function p(t,e){1&t&&(l.Nb(0,"div",14),l.Nb(1,"span"),l.ic(2,"El pa\xeds del la pelicula es "),l.Nb(3,"strong"),l.ic(4,"Obligatorio"),l.Mb(),l.Mb(),l.Mb())}function m(t,e){1&t&&(l.Nb(0,"div",14),l.Nb(1,"span"),l.ic(2,"La calificaci\xf3n del la pelicula es "),l.Nb(3,"strong"),l.ic(4,"Obligatoria"),l.Mb(),l.Mb(),l.Mb())}let h=(()=>{class t{constructor(t,e,i,o,a){this._peliculasServise=t,this.fb=e,this.router=i,this.toastr=o,this.aRouter=a,this.titulo="Agregar Pelicula",this.peliculaForm=this.fb.group({Name:["",r.j.required],Contry:["",r.j.required],Rating:["",r.j.required]}),this.id=this.aRouter.snapshot.paramMap.get("id")}ngOnInit(){this.esEditar()}agregarPelicula(){var t,e,i;const o={Name:null===(t=this.peliculaForm.get("Name"))||void 0===t?void 0:t.value,Contry:null===(e=this.peliculaForm.get("Contry"))||void 0===e?void 0:e.value,Rating:null===(i=this.peliculaForm.get("Rating"))||void 0===i?void 0:i.value};null!==this.id?(console.log(o.ID),this._peliculasServise.actializarPelicula(Number(this.id),o).subscribe(t=>{this.toastr.info("La pelicula fue actualizada con exito!","Pelicula Acrualizado!"),this.router.navigate(["/modulo1/lista"])}),this.toastr.info("La pelicula fue actualizada con exito!","Pelicula Acrualizado!"),this.router.navigate(["/modulo1/lista"])):(console.log(o),this._peliculasServise.agrearPeliculas(o).subscribe(t=>{console.log("Agregado"),this.toastr.success("La pelicula fue registrada con exito!","Pelicula Registrada!"),this.router.navigate(["/modulo1/lista"])}))}esEditar(){null!==this.id&&(this.titulo="Editar Producto",this._peliculasServise.getPelicula(Number(this.id)).subscribe(t=>{this.peliculaForm.setValue({Name:t.Name,Contry:t.Contry,Rating:t.Rating})}))}}return t.\u0275fac=function(e){return new(e||t)(l.Ib(b.a),l.Ib(r.b),l.Ib(a.b),l.Ib(d.b),l.Ib(a.a))},t.\u0275cmp=l.Cb({type:t,selectors:[["app-agregar"]],decls:22,vars:6,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-sm-6","offset-lg-3"],[1,"card","border-dark"],[1,"card-header","bg-dark","text-white","text-center"],[3,"formGroup","ngSubmit"],[1,"card-body","text-dark"],[1,"form-group"],["type","text","formControlName","Name","placeholder","Nombre",1,"form-control","form-control-lg"],["class","text-danger",4,"ngIf"],["type","text","formControlName","Contry","placeholder","Pa\xeds",1,"form-control","form-control-lg"],["type","text","formControlName","Rating","placeholder","Calificaci\xf3n",1,"form-control","form-control-lg"],["type","submit",1,"btn","btn-primary","btn-lg","mb-3","float-right",3,"disabled"],["routerLink","/modulo1/lista","type","button",1,"btn","btn-danger","btn-lg","mb-3","float-left"],[1,"text-danger"]],template:function(t,e){1&t&&(l.Nb(0,"div",0),l.Nb(1,"div",1),l.Nb(2,"div",2),l.Nb(3,"div",3),l.Nb(4,"div",4),l.ic(5),l.Mb(),l.Nb(6,"form",5),l.Ub("ngSubmit",(function(){return e.agregarPelicula()})),l.Nb(7,"div",6),l.Nb(8,"div",7),l.Jb(9,"input",8),l.hc(10,g,5,0,"div",9),l.Mb(),l.Nb(11,"div",7),l.Jb(12,"input",10),l.hc(13,p,5,0,"div",9),l.Mb(),l.Nb(14,"div",7),l.Jb(15,"input",11),l.hc(16,m,5,0,"div",9),l.Mb(),l.Nb(17,"div"),l.Nb(18,"button",12),l.ic(19," Enviar "),l.Mb(),l.Nb(20,"button",13),l.ic(21," Lista "),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&t&&(l.xb(5),l.kc(" ",e.titulo," "),l.xb(1),l.Xb("formGroup",e.peliculaForm),l.xb(4),l.Xb("ngIf",e.peliculaForm.get("Name").hasError("required")&&e.peliculaForm.get("Name").touched),l.xb(3),l.Xb("ngIf",e.peliculaForm.get("Contry").hasError("required")&&e.peliculaForm.get("Contry").touched),l.xb(3),l.Xb("ngIf",e.peliculaForm.get("Rating").hasError("required")&&e.peliculaForm.get("Rating").touched),l.xb(2),l.Xb("disabled",e.peliculaForm.invalid))},directives:[r.k,r.g,r.d,r.a,r.f,r.c,o.i,a.c],encapsulation:2}),t})();const f=[{path:"top",component:u},{path:"editar/:id",component:h},{path:"agregar",component:h}];let N=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(f)],a.f]}),t})(),v=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},imports:[[o.b,N,r.i]]}),t})()}}]);