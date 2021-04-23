import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MainscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
