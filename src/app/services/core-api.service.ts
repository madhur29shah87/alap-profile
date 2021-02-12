import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreApiService {

  constructor() { }

  getWork(){
    this.httpClient.get("assets/stub/work.json").subscribe((data): any => {
      if (data) {
        this.latestCards = data['latestWork'];
        this.workCards = data['work'];
      }
    })
  }
}