import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//rutas
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

//service
import { PeliculasServise } from './servicios/peliculas.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [PeliculasServise],
  bootstrap: [AppComponent]
})
export class AppModule { }
