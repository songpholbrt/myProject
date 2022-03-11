import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MainService } from 'src/app/services/main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public jwtHelper = new JwtHelperService(); // มานิว คลาสใหม่
  public login = new Login();

  constructor( // ตัวแปรทำงาน โหลดเข้ามาแค่ครั้งแรก ครั้งเดียว // ตัวแปรเก็บในวงเล็บ
    @Inject('TOKENNAME') private tokenName: string, // ตัวแปรของ Environment
    private main: MainService, // คลาสจากข้างนอก
    private router: Router // คลาสจากข้างนอก
  ) { } // ฟังชั่นอยู่ในก้ามปู

  ngOnInit(): void { // ตัวแปรทำงาน โหลดเข้ามา และเปลี่ยนได้ตาม event
    document.body.className = 'hold-transition login-page';
    //const token = localStorage.getItem(this.tokenName);
    const token = JSON.parse(localStorage.getItem(this.tokenName)!);

    try {
      if (!this.jwtHelper.isTokenExpired(token)) {
        this.router.navigate(['/index']);
      }
    } catch (err) {
      this.main.logout();
    }
  }

  onSubmit() {
    //alert("deww");
    this.main.post('login', this.login).then((res: any) => { // ได้ callback มาใส่ในตัวแปร res
      //console.log(res);
      //alert("deww");

      if (res.ok) { // ok คือ ค่าจาก object เป็น boonlean
        console.log(res);
        localStorage.setItem(this.tokenName, res.token); // เอา token เก็บลง localstorage
        this.router.navigate(['/']);

      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด !',
          text: res.err
        });
      }

    })
  }

}

export class Login{ // เพื่อแค่เก็บค่าตัวแปร
  username: string = 'admin';
  password: string = 'admin';

}
