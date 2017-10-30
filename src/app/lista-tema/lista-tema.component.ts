import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/tema';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-lista-tema',
  templateUrl: './lista-tema.component.html',
  styleUrls: ['./lista-tema.component.css']
})
export class ListaTemaComponent implements OnInit {
  teme:Tema[];
  novaTema:Tema;
  constructor(private http: Http, private activatedRoute:ActivatedRoute, private userService:UserService) {
    this.novaTema = { id:0, naziv:'', opis:'', korisnikid: parseInt(userService.userId()), kategorijaid:0 };
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>

      {
        this.http.get('http://localhost/webForum/src/server/Tema/getTema.php?kategorijaid='+params['kategorijaid'])
        .map(response =>response.json())
        .subscribe(result => {this.teme = result; console.log(this.teme);})

        this.novaTema.kategorijaid = params['kategorijaid'];
        this.novaTema.korisnikid = params['korisnikid'];
        console.log(this.novaTema);
      }
    );
  }
}
