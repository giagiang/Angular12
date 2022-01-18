import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public LoginName = "admin"; //'user'
  public myColor = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
