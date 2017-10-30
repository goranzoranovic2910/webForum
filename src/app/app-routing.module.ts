import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaKategorijaComponent } from './lista-kategorija/lista-kategorija.component';
import { NoviKorisnikComponent} from './novi-korisnik/novi-korisnik.component';
import { NovaKategorijaComponent } from './nova-kategorija/nova-kategorija.component';
import { IzmeniKategorijuComponent } from './izmeni-kategoriju/izmeni-kategoriju.component';
import { IzbrisiKategorijuComponent } from './izbrisi-kategoriju/izbrisi-kategoriju.component';
import { ListaTemaComponent } from './lista-tema/lista-tema.component';
import { IzmeniTemuComponent } from './izmeni-temu/izmeni-temu.component';
import { NovaTemaComponent } from './nova-tema/nova-tema.component';
import { IzbrisiTemuComponent } from './izbrisi-temu/izbrisi-temu.component';
import { ListaKomentaraComponent } from './lista-komentara/lista-komentara.component';
import { IzbrisiKomentarComponent } from './izbrisi-komentar/izbrisi-komentar.component';
import { NoviKomentarComponent } from './novi-komentar/novi-komentar.component';
import { IzmeniKomentarComponent } from './izmeni-komentar/izmeni-komentar.component';
import { IzmeniKorisnikaComponent } from './izmeni-korisnika/izmeni-korisnika.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path:'' , redirectTo:'/kategorije', pathMatch:'full'},
  { path: 'kategorije' , component: ListaKategorijaComponent},
  { path: 'novi-korisnik', component : NoviKorisnikComponent },
  { path: 'nova-kategorija', component : NovaKategorijaComponent },
  { path: 'izmeni-kategoriju/:id', component : IzmeniKategorijuComponent },
  { path: 'izbrisi-kategoriju/:id', component : IzbrisiKategorijuComponent },
  { path: 'lista-tema/:kategorijaid/:korisnikid', component : ListaTemaComponent },
  { path: 'izmeni-temu/:id', component : IzmeniTemuComponent },
  { path: 'nova-tema/:kategorijaid/:korisnikid', component : NovaTemaComponent },
  { path: 'izbrisi-temu/:id', component : IzbrisiTemuComponent },
  { path: 'lista-komentara/:temaid/:korisnikid', component : ListaKomentaraComponent },
  { path: 'izbrisi-komentar/:id', component : IzbrisiKomentarComponent },
  { path: 'novi-komentar/:temaid/:korisnikid', component : NoviKomentarComponent },
  { path: 'izmeni-komentar/:id', component : IzmeniKomentarComponent },
  { path: 'izmeni-korisnika/:id', component : IzmeniKorisnikaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
