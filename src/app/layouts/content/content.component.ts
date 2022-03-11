import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

export class Equipment{
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public date_add: string,
    public d_update: string,
    public userid: number,
    public username: string,
  ) { }
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  equipments!: Equipment[];

  //public equipment: any;
  //public res: any;
  //public result: any;
  private urlEquip: string = 'http://localhost/mysql2json/equipment.php';

  constructor(
    private main: MainService,
    private httpClinet: HttpClient
    
  ) { }

  ngOnInit(): void {

    /*this.main.getData(this.urlEquip).subscribe(res => {
      this.result = res;
      //console.log(res);
   });
   */
    
    this.getEquipment();

  }

  /*
  getEquipment() {
    //this.main.get('equipmant').then((res: any) => {
    //console.log(res);
    //});

    console.log(this.equipment);
    this.equipment = this.res.data;

    //localStorage.setItem("name", "John Doe");
  }
  */
  
  getEquipment() {
    this.httpClinet.get<any>(this.urlEquip).subscribe(
      response => {
        //console.log(response);
        this.equipments = response;
      }
    );
  }

}

