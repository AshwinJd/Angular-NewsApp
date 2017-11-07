import { Component, OnInit, Input, DoCheck, AfterContentInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  specificNews = [];
  data: string;
  constructor(private dataSource: DataShareService, private http: HttpClient) { }

  ngOnInit() {
    // console.log(this.data);
    this.specificNews.push(this.dataSource.getDetailNews(this.data));
    // console.log(this.specificNews);
  }

  // ngAfterContentInit() {
  //   this.specificNews.push(this.dataSource.getDetailNews(this.data));
  //   // console.log(this.specificNews);
  // }

}
