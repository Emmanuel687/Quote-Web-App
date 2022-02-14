import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes App';
  
  quotes:Quote[] = [
    new Quote(1,'You only live once, but if you do it right, once is enough','Mae West','Brenda Andeso',new Date(2022,1,1)),
    new Quote(2,'If you want to live a happy life, tie to a goal, not people or things','Albert Eintsen','Collins Wasonga',new Date(2022,1,1,)),
    new Quote(3,'Never let the fear of striking out keep you from playing the game','Babe Ruth','Ashley Liavoga',new Date(2022,1,1)),
  ];
}
