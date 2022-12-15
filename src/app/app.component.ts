import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public views: any = {
    instructions: false,
    new: true,
    list: false
  }

  constructor(

  ){

  }

  title = 'sr-test';

  ngOnInit(): void
  {

  }

  changeView (view: string) {
    switch(view) {
      case ('instructions') :
        this.views = {
          instructions: true,
          new: false,
          list: false
        }
        break;
      case ('new') :
        this.views = {
          instructions: false,
          new: true,
          list: false
        }
        break;

      case ('list'):
        this.views = {
          instructions: false,
          new: false,
          list: true
        }
        break;
      default:
        break;
    }
  }

  getEvent(event) {
    this.changeView('list');
  }
}
