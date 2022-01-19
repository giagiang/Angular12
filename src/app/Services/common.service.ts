import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;

  constructor() { }
  
  public binhPhuong( n : number):number{
    return n * n ;
  }

  public getCounter():number{
    return this.counter;
  }
  public setCounter(n: number): void{
   this.counter = n; 
  }
  public submitData (data: any): void{
    console.log('gửi data lên servers. siuuuuu = ', data);
  }
}
