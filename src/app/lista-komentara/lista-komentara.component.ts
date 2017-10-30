import { Component, OnInit } from '@angular/core';
import { Komentar } from '../model/komentar';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-lista-komentara',
  templateUrl: './lista-komentara.component.html',
  styleUrls: ['./lista-komentara.component.css']
})
export class ListaKomentaraComponent implements OnInit {
  komentari:Komentar[];
  noviKomentar:Komentar;
  constructor(private http: Http, private activatedRoute:ActivatedRoute, private userService:UserService) {
    this.noviKomentar = { id:0, tekst:'', korisnikid:parseInt(this.userService.userId()), korisnickoime:'', temaid:0 };
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>

      {
        this.http.get('http://localhost/webForum/src/server/Komentar/getKoment.php?temaid='+params['temaid'])
        .map(response =>response.json())
        .subscribe(result => {this.komentari = result; console.log(this.komentari);})

        this.noviKomentar.temaid = params['temaid'];
        this.noviKomentar.korisnikid = parseInt(this.userService.userId());
        console.log(this.noviKomentar);
      }
    );
  }
}
