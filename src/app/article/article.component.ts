import { Component, OnInit, HostBinding,Input } from '@angular/core';
import { Article } from './article.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
 
  constructor() { }

   voteUp(): boolean{
     this.article.voteUp();
     return false // prevents propogation 
   }

   voteDown(): boolean{
     this.article.voteDown();
     return false // prevents propogation 
   }

  ngOnInit() {
  }

}
