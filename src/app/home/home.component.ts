import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Ricciardo';
  public age = '20';
  // public tinhThanh = ['Thanh Hóa','Hà Nội','Thái Nguyên','Nghệ An','Đà Nẵng','Sài Gòn']
  public traiCay = ['Thanh Long','Mít','Cam','Dưa Hấu','Mận']
  public traiCay2 = [
    {name: 'Thanh Long', gia: 12.333, haGia: true},
    {name: 'Cam', gia: 35.222, haGia: false },
    {name : 'tao', gia: 21.023, haGia: true},
  ];


  constructor() { }

  public  ngOnInit(): void {
    console.log('traiCay=', this.traiCay);
  }

}
