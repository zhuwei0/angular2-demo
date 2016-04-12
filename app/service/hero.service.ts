import {Injectable} from 'angular2/core';
import {HEROES} from '../data/mock-heroes';
import {Hero} from '../model/hero';
@Injectable()
export class HeroService {
    getHeroes() {
        //return HEROES ;
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
                setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}