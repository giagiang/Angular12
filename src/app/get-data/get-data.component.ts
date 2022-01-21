import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private httpServerServer:HttpServerService) { }

  public ngOnInit(): void {
    this.httpServerServer.getComments().subscribe(data =>{
      console.log( 'getComments', data);
    });
      this.httpServerServer.getRandomUsers(10).subscribe((data)=>{
        console.log( 'getRandomUsers', data);
      });
  }
  

}
