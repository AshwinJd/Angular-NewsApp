import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataShareService } from '../../services/data-share.service';
import { NewsExtractService } from '../favourites/news-extract.service';

import 'rxjs/add/operator/map';


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
  userDetail: any;
  constructor(private dataSource: DataShareService,private newsExtract: NewsExtractService) { }
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

  addFav(detail){
   
    this.userDetail = JSON.parse(localStorage.getItem('user_val'));
    this.newsExtract.postFav(detail,this.userDetail.username);
   }

  ngOnInit() {
    this.dataSource.getDetailNews(this.selectedNews).subscribe
    (res => {
      this.specificNews = JSON.parse(res['_body']).articles;
      console.log(this.specificNews);
      });
  }

}
