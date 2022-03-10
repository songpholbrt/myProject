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

  public login = new Login();
  jwtHelper = new JwtHelperService();

  constructor(
    @Inject('TOKENNAME') private tokenName: string,
    private main: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
    this.main.post('login', this.login).then((res: any) => {
      //console.log(res);
      alert("deww");
      if (res.ok) {
        console.log(res);
        localStorage.setItem(this.tokenName, res.token);
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

export class Login{
  username: string = '';
  password: string = '';

}
