import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  someInf:any;
  apiObservable!: Observable<any>;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(this.getparams);
  }

  getparams = (params: any,) => {
    console.log(params['cat-name']);
    let catName = params['cat-name'];
    this.apiCall(catName);
  };

  
  apiCall = (catName : string) => {
    //Richiama le API a te assegnate aggiungendo il nome della categoria passato come parametro
    const apiUrl = `CHANGEME`;
    this.apiObservable = this.http.get(apiUrl); //Aggiungi un tipo di dati alla chiamata http.get
    this.apiObservable.subscribe(
      {
        next: this.handleApiResponse, //IF OK
        error: this.handleApiError    //IF ERROR
    }
    );
  }

  handleApiResponse = (response: any) => {
    console.log(response);
    this.someInf = response;
  };

  handleApiError = (error: any) => {
    console.log(error);
    //REDIRECT TO ERROR PAGE OR SHOW ERROR MESSAGE
  };
}







