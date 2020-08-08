import { Component, OnInit } from '@angular/core';
import { Hero } from '../service/hero'
import { HeroService } from '../service/hero.service'
@Component({
  selector: 'app-text-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class TestInputComponent implements OnInit {
  heroes: Hero[] = []
  selectted: Hero
  constructor(private heroService: HeroService) { }

  ngOnInit(){
    this.getHero()
    // console.log(`hero test ${this.heroes[3].id}`)
    console.log(this.heroes[0].name)
  }

  getHero() {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }
  selected(hero: Hero){
    this.selectted = hero
  }

  onDelete(hero: Hero) {
    console.log(hero)
  }

}
