import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../services/message.service'
import { Hero } from '../../services/hero'
import { HeroService } from '../../services/hero.service'
@Component({
  selector: 'app-hero-new',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  selectedHero: Hero
  heroes: Hero[]

  constructor( private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes()
    // console.log(`${this.heroes[0].name}`)
  }

  // onSubmit(){
  //   this.MessageService.addMessage()
  // }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }
}
