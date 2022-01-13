import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'ricciardo';

  public home = 'Sweet Home'

  public age = 18;

  constructor() { }

  ngOnInit(): void {
  }

}
