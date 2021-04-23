import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { kiteKey } from '../kitekey';
import { UserdataService } from '../service/userdata.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})



export class LoginComponent implements OnInit {
key= new kiteKey();
api_key='909lcbtyglf6ks4o';
  KiteConnect = require("kiteconnect").KiteConnect; 
 access_token='Uitf22AQZmfkZM2oy1RAZENkvrjkS21n';
 options = {
	"api_key": this.api_key,
	"debug": false
};
  kc = new this.KiteConnect(this.options);



  constructor( private dataService: UserdataService) { 


  }

  ngOnInit() {
    this.kc.setAccessToken(this.access_token);
    this.init();
    
  }
  init() {
    console.log(this.kc.getLoginURL());
    this.getProfile();




}

 getProfile() {
  this.kc.setAccessToken(this.access_token);
	this.KiteConnect.getProfile()
		.then(function(response: any) {
			console.log(response);
		}).catch(function(err: any) {
			console.log(err);
		});
}

}
