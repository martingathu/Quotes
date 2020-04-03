import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote(1,'\“You\’re off to great places, today is your day. Your mountain is waiting, so get on your way.\”','Dr. Seuss',"Martin",new Date(2020,2,4),0,0),
    new Quote(2,'\“You always pass failure on the way to success.\”','Mickey Rooney', "Martin",new Date(2020,1,14),0,0),
    new Quote(3,'\“Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.\”' , 'Wolfgang Riebe', "Martin",new Date(2020,2,14),0,0),
    new Quote(4,'“The only time you fail is when you fall down and stay down."' , 'Stephen Richards', "Martin",new Date(2020,2,14),0,0),
    new Quote(5,'“Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.”', 'Lou Holtz', "Martin",new Date(2020,2,4),0,0),
    new Quote(6,'“The way I see it, if you want the rainbow, you gotta put up with the rain.”', 'Dolly Parton', "Martin",new Date(2020,3,30),0,0),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
    quote.postingDate= new Date()
    
    if (quote.author === ''|| quote.author === '' || quote.blogger === ''){
      alert('all fields are required!')
    }else{
    this.quotes.push(quote);
  }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete this Quote?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
