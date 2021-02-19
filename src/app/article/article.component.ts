import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article:Article

  constructor() { 
    //this.article = new Article("Angular", "https://angular.io", 10)


  }

  ngOnInit() : void {
  }

  voteUp() : boolean {
    this.article.voteUp();
    return false;
  }

  voteDown() : boolean {
    this.article.voteDown();
    return false;
  }
}
