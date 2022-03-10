import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public decoded: any;

  constructor(
    private main: MainService
  ) { }

  ngOnInit(): void {
    //this.decoded = this.main.decodeToken();
    this.decoded = {
      'pname':'Mr.','fname':'Songphol','lname':'Aiyarakom'
    }
    console.log(this.decoded);
  }

  logout() {
    this.main.logout();
  }

}
