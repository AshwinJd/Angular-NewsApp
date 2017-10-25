import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataShareService {

  constructor(private http: Http) { }

  getDetailNews(data: string) {
    return this.http.get('https://newsapi.org/v1/articles?source=' + data + '&apiKey=998ff651e55e4c518d2948f9407db7c2');
  }
}
