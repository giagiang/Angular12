import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    const payload = { "body": "Đây là message số 4", "postId": 3};
    this.httpServerService.postComment(payload).subscribe(data =>{
      console.log('postComment',data)
    } );
  }

}
