import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Tema } from '../model/tema';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-izmeni-temu',
  templateUrl: './izmeni-temu.component.html',
  styleUrls: ['./izmeni-temu.component.css']
})
export class IzmeniTemuComponent implements OnInit {

  name = 'Izmena teme';
  tema:Tema;

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
     this.tema = { id:0, naziv:'', opis:'', kategorijaid:0, korisnikid:0 };

     this.activatedRoute.params.subscribe(params =>
       this.http.get('http://localhost/webForum/src/server/Tema/getOneTema.php?id='+params['id'])
       .map(response =>response.json())
       .subscribe(result => {this.tema = result; console.log(this.tema);}));
   }

   ngOnInit(){

   }

   izmeniTemu(){

     let bodyString = JSON.stringify(this.tema);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("http://localhost/webForum/src/server/Tema/putTema.php", bodyString, options)
                             .map((res:Response) => res.json())
                             .subscribe(response => {
                               console.log(response);
                               if(response.result=="success"){
                                 console.log(this.router);
                                 this.router.navigate(['/lista-tema/'+this.tema.kategorijaid+'/'+this.tema.korisnikid]);
                               }
                               else{
                                 console.log("Error!");
                                 alert(response);
                               }
                             });
   }

}
