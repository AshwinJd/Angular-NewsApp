import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})

export class NewsListComponent implements OnInit {

  @Input() result: string[];
  selectedNews = 'bbc-news';
  specificNews: any;
  data: string;

  constructor(private dataSource: DataShareService, private http: HttpClient) { }
  // @Output() selectNews = new EventEmitter<string>();
  sendNews(info) {
    this.selectedNews = info;
    this.dataSource.getDetailNews(this.selectedNews).subscribe
    (res => {
      this.specificNews = JSON.parse(res['_body']).articles;
      console.log(this.specificNews);
      });
    // console.log('clc', this.specificNews);
    // this.dataSource.changeData(this.selectedNews);
  }
  ngOnInit() {
    this.dataSource.getDetailNews(this.selectedNews).subscribe
    (res => {
      this.specificNews = JSON.parse(res['_body']).articles;
      console.log(this.specificNews);
      });
  }

}
