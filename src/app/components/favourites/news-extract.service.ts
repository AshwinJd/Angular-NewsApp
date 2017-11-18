import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { newsDetail } from './newsDetail';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsExtractService {
  authToken: any;
  constructor(private http: Http) { }
  getFav(): Observable<newsDetail[]> {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http 
      .get('http://localhost:3000/api/news',{headers: headers})
      .map(response => {
        // console.log("asda"+response);
        return <newsDetail[]>response.json();
        
      })
  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  postFav(news){
    console.log("service",news);
    var headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append( 'Content-Type', 'application/json' );
    // let options = new RequestOptions({ headers: headers });
    // return this.http.post('http://localhost:3000/api/newsadd', JSON.stringify(news), {headers: headers})
    //   .map(res => res.json);
      return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/api/newsadd', news, {headers:headers})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

  } 
  
  deleteFav(id){
    return this.http.delete('http://localhost:3000/api/news/'+id)
      .map(res => res.json());
  }
}
