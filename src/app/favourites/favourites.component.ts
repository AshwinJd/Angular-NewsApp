import { Component, OnInit } from '@angular/core';
import { NewsExtractService } from './news-extract.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favList: any;
  
  constructor(private newsExtract: NewsExtractService) { }

  ngOnInit() {
    this.newsExtract.getFav().subscribe
    (res => {
      this.favList = res;
    })
  }

}
