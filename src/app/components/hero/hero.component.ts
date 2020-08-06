import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }
  @Input('abc') ngu: string
  @Output('abc') 

  ngOnInit(): void {
  }

}
