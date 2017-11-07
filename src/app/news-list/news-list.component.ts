import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataShareService } from '../data-share.service';
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
  fav: any;
  data: string;

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
    // d.description;
    // console.log("detail", detail.descriptions, typeof(detail.description));
    this.specificNews.map(item=>{
      // console.log("desc",item.description,typeof(item.description));
      if(item.description == detail.description) {
        this.fav = item;
        this.newsExtract.postFav(this.fav);
        console.log(this.fav);
        return;
      }else{
        console.log("couldnt add to fav");
      }
    })
  
  }

  ngOnInit() {
    this.dataSource.getDetailNews(this.selectedNews).subscribe
    (res => {
      this.specificNews = JSON.parse(res['_body']).articles;
      console.log(this.specificNews);
      });
  }

}
