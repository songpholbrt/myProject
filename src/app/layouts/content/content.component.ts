import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';
declare const $: any;

/*export class Equipment{
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public date_add: string,
    public d_update: string,
    public userid: number,
    public username: string,
  ) { }
}*/

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  //equipments!: Equipment[];
  public equ = new Equipment();
  public equipments: any;
  public equName = [
    'Computer' , 'Printer', 'Scanner','Laptop','Monitor'
  ];
  public edit: boolean = false;

  errCode: boolean = false;
  errDateAdd: boolean = false;
  //errUsername: boolean = false;


  //public equipment: any;
  //public res: any;
  //public result: any;
  private urlEquip: string = 'http://localhost/mysql2json/equipment.php';

  constructor(
    private main: MainService,
    private httpClinet: HttpClient
    
  ) { }

  ngOnInit(): void {
    this.getEquipment();

  }
  
  getEquipment() {
    this.httpClinet.get<any>(this.urlEquip).subscribe(
      response => {
        //console.log(response);
        this.equipments = response;
      }
    );
  }

  addEqipment() {
    //alert("add");
  }

  editEqipment(equipm: any) {
    //alert("edit");
    this.edit = true;
    this.equ = equipm;
    $('#modal-add-equipment').modal({ backdrop: 'static', keyboard: false });
  }

  deleteEqipment() {
    alert("delete");
  }

  onCode(str:string) {
    //return this.errCode = (!str) ? true : false;
    if (!str) {
      this.errCode = true;
    } else {
      this.errCode = false;
    }
  }
  onDateAdd(str:string) {
    return this.errDateAdd = (!str) ? true : false;
  }

  onError() {
    const arrError = [];
    arrError.push(this.onCode(this.equ.code));
    arrError.push(this.onDateAdd(this.equ.date_add));
    return this.main.in_array(true, arrError);
  }

  onCancel() {
    this.edit = false;
    $('#modal-add-equipment').modal('hide');
    this.equ = new Equipment();
    this.errCode = false;
    this.errDateAdd = false;
  }

  onSubmit() {
    //console.log(this.equ);

    if (!this.onError()) {
      //alert("adddd");
      this.main.post('equipment', this.equ).then((res: any) => {
        this.getEquipment();

        Swal.fire({
          position: 'top-end',
          title: 'ยินดีด้วย!',
          text: 'บันทึกข้อมูลสำเร็จ',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          allowOutsideClick: false
        }).then(() => {
          this.getEquipment();
          this.onCancel(); // เพื่อเคลียร์ค่าทั้งหมด
        });

      })

    } else {
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'คุณกรอกข้อมูลไม่ถูกต้องหรือยังไม่สมบูรณ์ กรุณาตรวจสอบ',
        allowOutsideClick: false
      });
    }
  }

}

export class Equipment{
  code: string = '';
  name: string = 'Computer';
  date_add: any = '';
  username: string = '';
}