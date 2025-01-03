import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  catName: any;
  someInf:any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(this.getparams);
  }

  getparams = (params: any,) => {
    console.log(params['cat-name']);
    this.catName = params['cat-name'];
    this.apiCall();
  };

  //Aggiungi un tipo di dati alla chiamata http
  apiCall = () => {
    //Richiama la seguenete API https://emojihub.yurace.pro/api/category/:cat-name
    const apiObservable = this.http.get(`https://emojihub.yurace.pro/api/all/category/${this.catName}`);
    apiObservable.subscribe(
      {
        next: this.handleApiResponse,
        error: this.handleApiError
    }
    );
  }

  handleApiResponse = (response: any) => {
    console.log(response);
    this.someInf = response;
  };

  handleApiError = (error: any) => {
    console.log(error);
  };
}







