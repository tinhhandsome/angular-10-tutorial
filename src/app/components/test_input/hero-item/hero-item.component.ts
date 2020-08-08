import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../service/hero'
@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {

  @Input() heroes: Hero[]
  @Output() hero = new EventEmitter<Hero>()
  constructor() { }

  ngOnInit(): void {
  }

  OnDelete(hero: Hero){
    this.hero.emit(hero)
  }
}
