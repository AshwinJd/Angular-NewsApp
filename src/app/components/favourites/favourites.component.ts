import { Component, OnInit } from '@angular/core';
import { NewsExtractService } from './news-extract.service';
import { newsDetail } from './newsDetail';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favList: any;
  selectedFav: newsDetail;
  constructor(private newsExtract: NewsExtractService) { }

  ngOnInit() {
    this.newsExtract.getFav().subscribe
    (res => {
      this.favList = res;
    })
  }

  deleteFav(id){
    this.newsExtract.deleteFav(id).subscribe(
      res => {
        this.favList.forEach((item,index) => {
          if(res._id == item._id){
            this.favList.splice(index,1);
          }
        });
      }
    )
  }
}
