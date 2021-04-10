import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zerodha';
  public weatherSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apixuService: UserdataService) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues) {
    console.log(formValues);
    this.apixuService.getWeather(formValues.location).subscribe(data => console.log(data));

  }

}
