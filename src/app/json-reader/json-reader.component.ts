import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.css']
})
export class JsonReaderComponent implements OnInit {

  private environments: Array<Environments>;
  private http: HttpClient;
  private environment: Array<Environment>;


  constructor(http: HttpClient) {
     this.http = http;
     this.getData().subscribe(data => {console.log(data);this.environments = data; } );
  }

  ngOnInit() {
  }

  getData(): Observable<Array<Environments>> {
    return this.http.get<Array<Environments>>('/assets/data.json');
  }

}


interface Environments{
  environment: Array<Environment>;
}

interface Environment {
  urls: Array<Urls>;
}

interface Urls {
  name: string;
  url: string;

}

