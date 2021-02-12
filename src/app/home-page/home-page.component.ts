import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  workCards: any = [];
  latestCards: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/stub/work.json").subscribe((data): any => {
      if (data) {
        this.latestCards = data['latestWork'];
        this.workCards = data['work'];
      }
    })
  }

}
