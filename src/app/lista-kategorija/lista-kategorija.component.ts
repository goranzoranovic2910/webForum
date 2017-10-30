import { Component, OnInit } from '@angular/core';
import { Kategorija } from '../model/kategorija';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lista-kategorija',
  templateUrl: './lista-kategorija.component.html',
  styleUrls: ['./lista-kategorija.component.css']
})
export class ListaKategorijaComponent implements OnInit {
  kategorije:Kategorija[];
  keyword:string;
  constructor(private http: Http, private userService:UserService, private router:Router) {

  }

  ngOnInit() {

    if(this.userService.userLoggedIn() == false){
      this.router.navigate(['/login']);
    }

    this.http.get('http://localhost/webForum/src/server/Kategorija/getKat.php')
    .map(response =>  response.json())
    .subscribe(sveKat => {
      this.kategorije = sveKat; console.log(this.kategorije);
    });
  }
}
