import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { newsList } from '../newslist';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataShareService {

  constructor(private http: Http) { }

  listNews: string[];
  getDetailNews(data: string) {
    return this.http.get('https://newsapi.org/v1/articles?source=' + data + '&apiKey=998ff651e55e4c518d2948f9407db7c2');
  }

  getListNews(): Observable<newsList[]> {
    return this.http
      .get('https://newsapi.org/v1/sources?language=en')
      .map(response => {
        return <newsList[]>response.json();
      })
    }
}
