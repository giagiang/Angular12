import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Ricciardo';
  public age = '20';
  public tinhThanh = ['Thanh Hóa','Hà Nội','Thái Nguyên','Nghệ An','Đà Nẵng','Sài Gòn']
  public traiCay = ['Thanh Long','Mít','Cam','Dưa Hấu','Mận']

  constructor() { }

  public  ngOnInit(): void {
    console.log('tinhThanh=', this.tinhThanh);
  }

}
