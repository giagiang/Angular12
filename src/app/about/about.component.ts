import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public LoginName = "admin"; //'user'
  public myColor = 'red';
  public counter = 0 ;
  public counterBinhPhuong = 0 ;

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++ ;
  }

}
