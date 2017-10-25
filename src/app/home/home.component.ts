import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result = [];
  specificNews = [];
  selectedNews: string;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://newsapi.org/v1/sources?language=en').subscribe
    (res => {
      this.result.push(res);
      this.result = this.result[0].sources;
      });
    }
}
