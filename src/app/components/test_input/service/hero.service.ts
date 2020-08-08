import { Hero } from './Hero'
import { HEROES } from './heroes-mock'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class HeroService {
    constructor(){}
    getHeroes(): Observable<Hero[]> {
        return of(HEROES)
    }
}