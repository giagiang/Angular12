import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
  @Input()name :string = '';
  @Output() sonCall: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  public callFather(){
    console.log('goi cha');
    this.sonCall.emit(this.name);
  }
  public giveMoney(amount:number){
   console.log(
     'Con là '+ this.name+'. Thankiu father give money'+ amount + 'đồng'
   ) 
  }


}
