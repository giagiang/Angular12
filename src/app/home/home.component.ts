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
  public traiCay = ['Thanh Long', 'Mít', 'Cam', 'Dưa Hấu', 'Mận']
  public traiCay2 = [
    { name: 'Thanh Long', gia: 12.333, haGia: true },
    { name: 'Cam', gia: 35.222, haGia: false },
    { name: 'tao', gia: 21.023, haGia: true },
    { name: 'chanh', gia: 50.444, haGia: false },

  ];
  
  public districts: string[] =[] ;
  public vietnamData = [
    {city : 'Chọn Thành Phố', district : ['Quận Huyện']},
    {
      city: 'Thanh Hóa',
      district: [
        'Thành phố Thanh Hóa',
        'Thành phố Sầm Sơn',
        'Thị xã Bỉm Sơn',
        'Huyện Đông Sơn',
        'Huyện Quảng Xương',
        'Huyện Hoằng Hóa',
        'Huyện Hậu Lộc',
        'Huyện Hà Trung',
        'Huyện Nga Sơn',
        'Huyện Thiệu Hóa',
        'Huyện Triệu Sơn',
        'Huyện Yên Định',
        'Huyện Tĩnh Gia',
        'Huyện Nông Cống',
        'Huyện Ngọc Lặc',
        'Huyện Cẩm Thủy',
        'Huyện Thạch Thành',
        'Huyện Vĩnh Lộc',
        'Huyện Thọ Xuân',
        'Huyện Như Thanh',
        'Huyện Như Xuân',
        'Huyện Thường Xuân',
        'Huyện Lang Chánh',
        'Huyện Bá Thước',
        'Huyện Quan Hóa',
        'Huyện Quan Sơn',
        'Huyện Mường Lát',
      ],
    },
    {
      city: 'An Giang',
      
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],
    },
  ];

  constructor() { }

  public ngOnInit(): void {
    console.log('vietnamData=', this.vietnamData);
  }
  public changeCity(event: any) {
    const city = event.target.value;
    if(!city){
      return;
    }

// cach1
    // const citied = this.vietnamData.filter(data => data.city === city);
    // console.log('search', citied);
    // if (citied && citied.length > 0 ){
    //   const founded_city = citied[0];
    //   console.log(founded_city)
    //   this.districts = founded_city.district; 
    // }

//cach 2
    const tim_city = this.vietnamData.find(data => {
      return data.city === city 
    })
    console.log(tim_city);
    this.districts = tim_city?.district || [];
    debugger;
    // this.districts = this.vietnamData.find(data => {
    //   return data.city === city 
    // })?.district || [];
    console.log(this.districts );


  } 

}
