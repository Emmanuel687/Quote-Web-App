import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // quotes : Quote [] = [
  //   new Quote (1, 'Brenda Andeso', 'You only live once, but if you do it right, once is enough', 'Mae West',new Date(2021,3,21)),
  //   new Quote (2, 'Collins Wasonga','If you want to live a happy life,tie it to a goal, not people or things','Albert Einsten',new Date(2020,7,27)),
  //   new Quote (3, 'Ashley Livoga','Never let the fear of striking out keep you from playing the game','Babe Ruth',new Date(2020,9,16)),
  // ];
  quotes:Quote[] = [
    new Quote(1,'You only live once, but if you do it right, once is enough','Mae West','Brenda Andeso',new Date(2017,4,9)),
    new Quote(2,'If you want to live a happy life, tie to a goal, not people or things','Albert Eintsen','Collins Wasonga',new Date(2019,4,10)),
    new Quote(3,'Never let the fear of striking out keep you from playing the game','Babe Ruth','Ashley Liavoga',new Date(2018,5,11)),
  
  ];
  toggleDetails(index:number){
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }

completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}

