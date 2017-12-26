import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  displayedColumns = ['name', 'url'];
  dataSource = new MatTableDataSource();

  @Input() data: Array<Urls>;

  constructor() { }

  ngOnInit() {
     const arr =[];
     for(const d in this.data) {
           if(this.data.hasOwnProperty(d)) {
                 arr.push(d);
           }
     }
     console.log(arr);
     this.dataSource = new MatTableDataSource(arr);
  }

}

interface Urls {
  name: string;
  url: string;

}
