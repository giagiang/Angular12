import { Component, OnInit, ViewChild } from '@angular/core';
import { SonComponent } from '../son/son.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
public fatherMessage = ' ';

@ViewChild('thangTeo')thangTeo:SonComponent | undefined;
@ViewChild('thangTi')thangTi: SonComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public sonCall(name:string  ){
    console.log('đứa nào gọi father đấy',name);
    this.fatherMessage='chao con('+ name +')';
  }

  public giveMoney(){
    this.thangTeo?.giveMoney(100);
    this.thangTi?.giveMoney(50)
  }

}
