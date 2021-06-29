import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  email: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userDetails().subscribe(res =>{
      console.log('usr', res);
      if (res !== null){
        this.email = res.email;
      } else {
        this.navCtrl.navigateBack('/login');
      }
    }, err => {
      console.log('error', err);
    });
  }

  salirUsuario(){
    this.authService.logoutUser().then( res => {
      console.log(res);
      this.navCtrl.navigateBack('/login');
    }).catch(err => {
      console.log(err);
    });
  }
}
