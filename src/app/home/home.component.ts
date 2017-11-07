import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataShareService } from '../data-share.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result = [];
  specificNews = [];
  selectedNews: string;
  constructor(private http: HttpClient, private dataSource: DataShareService) {}
  ngOnInit(): void {
    // console.log(this.dataSource.getListNews());
    this.getListNews();
    // this.http.get('https://newsapi.org/v1/sources?language=en').subscribe
    // (res => {
    //   this.result.push(res);
    //   this.result = this.result[0].sources;
    //   });
    }
    getListNews(): void {
      this.dataSource.getListNews()
        .subscribe(
         data => this.result = data['sources']
        //  console.log(this.result);
        )
    }
}
