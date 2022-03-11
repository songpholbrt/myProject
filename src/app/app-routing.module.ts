import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: MainComponent }, // พาเข้าหน้า main ทั้วหมด

  // { path: '', redirectTo: 'login', pathMatch: 'full' }, //พาเข้าหน้า login ทั้วหมด
  { path: 'login', component: LoginComponent },
      { path: 'index', component: MainComponent }, // link test
  // {
  //   path: 'index', component: MainComponent,
  //   canActivate: [AuthGuardService], // ต้องผ่านจุดนี้ด้วยเสมอ
  //   children: [
  //     { path: '', component: MainComponent}
  //   ]
  // },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' } // หรือ ไปทำ component page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
