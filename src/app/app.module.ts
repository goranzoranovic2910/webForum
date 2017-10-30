import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NovaKategorijaComponent } from './nova-kategorija/nova-kategorija.component';
import { IzmeniKategorijuComponent } from './izmeni-kategoriju/izmeni-kategoriju.component';
import { ListaKategorijaComponent } from './lista-kategorija/lista-kategorija.component';
import { NoviKorisnikComponent } from './novi-korisnik/novi-korisnik.component';
import { IzmeniKorisnikaComponent } from './izmeni-korisnika/izmeni-korisnika.component';
import { NovaTemaComponent } from './nova-tema/nova-tema.component';
import { IzmeniTemuComponent } from './izmeni-temu/izmeni-temu.component';
import { PregledKategorijeComponent } from './pregled-kategorije/pregled-kategorije.component';
import { PregledTemeComponent } from './pregled-teme/pregled-teme.component';
import { NoviKomentarComponent } from './novi-komentar/novi-komentar.component';
import { IzmeniKomentarComponent } from './izmeni-komentar/izmeni-komentar.component';
import { AppRoutingModule } from './app-routing.module';
import { IzbrisiKategorijuComponent } from './izbrisi-kategoriju/izbrisi-kategoriju.component';
import { ListaTemaComponent } from './lista-tema/lista-tema.component';
import { IzbrisiTemuComponent } from './izbrisi-temu/izbrisi-temu.component';
import { ListaKomentaraComponent } from './lista-komentara/lista-komentara.component';
import { IzbrisiKomentarComponent } from './izbrisi-komentar/izbrisi-komentar.component';
import { LoginComponent } from './login/login.component';
import { UserService} from './user-service.service';
import { CookieService } from 'ngx-cookie';
import { CookieModule } from 'ngx-cookie';
import { LogoutComponent } from './logout/logout.component';
import { FilterKategorijaPipe } from './filter-kategorija.pipe';
import { FilterTemaPipe } from './filter-tema.pipe';
import { FilterKomentaraPipe } from './filter-komentara.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NovaKategorijaComponent,
    IzmeniKategorijuComponent,
    ListaKategorijaComponent,
    NoviKorisnikComponent,
    IzmeniKorisnikaComponent,
    NovaTemaComponent,
    IzmeniTemuComponent,
    PregledKategorijeComponent,
    PregledTemeComponent,
    NoviKomentarComponent,
    IzmeniKomentarComponent,
    IzbrisiKategorijuComponent,
    ListaTemaComponent,
    IzbrisiTemuComponent,
    ListaKomentaraComponent,
    IzbrisiKomentarComponent,
    LoginComponent,
    LogoutComponent,
    FilterKategorijaPipe,
    FilterTemaPipe,
    FilterKomentaraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
