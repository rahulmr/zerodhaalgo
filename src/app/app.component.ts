import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './service/userdata.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zerodha';
  public weatherSearchForm: FormGroup;
  public href: string = "";
  url: string = "asdf";

  constructor(private formBuilder: FormBuilder,private router : Router, private apixuService: UserdataService) {}

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues) {
    console.log(formValues);
    this.apixuService.getWeather(formValues.location).subscribe(data => console.log(data));

  }

}
