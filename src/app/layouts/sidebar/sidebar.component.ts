import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public decoded: any;

  constructor( 
    private main: MainService
   ) { }

  ngOnInit(): void {

    this.decoded = {
      'pname':'Mr.','fname':'Songphol','lname':'Aiyarakom'
    }
  }

}
