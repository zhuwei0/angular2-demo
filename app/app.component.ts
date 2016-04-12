//export class Hero {
//    id: number;
//    name: string;
//}
import {Hero} from './model/hero';
import {HeroDetailComponent} from './component/hero-detail.component'
import {HeroService} from './service/hero.service';


import {Component,OnInit} from 'angular2/core';  // 装饰器必须
//angular 是模块化的 许多文件都为了 单独的目标
//template 属性想要引用新的组件，必须 告诉装饰器 不仅仅是import，还要在组件中指定。
@Component({   //告诉angular 使用什么template 和 怎么创建 组件component
    selector: 'my-app',

    //template:`
    //      <h1>{{title}}</h1>
    //      <h2>{{hero.name}} details!</h2>
    //      <div><label>id: </label>{{hero.id}}</div>
    //      <div><label>name: </label>{{hero.name}}</div>
    //`
  //  template:`
  //<h1>{{title}}</h1>
  //<h2>{{hero.name}} details!</h2>
  //<div><label>id: </label>{{hero.id}}</div>
  //<div>
  //  <label>name: </label>
  //  <input value="{{hero.name}}" placeholder="name">
  //  <input [(ngModel)]="hero.name" placeholder="name">
  //</div>
  //`
    template:`
         <h2>My Heroes</h2>
        <ul class="heroes">
               <li *ngFor="#hero of heroes"  (click)="onSelect(hero)"
                [class.selected]="hero === selectedHero"
               >
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
        </ul>

        <my-hero-detail  [name]="'朱位'" [hero_set]="selectedHero"></my-hero-detail>
    `
    ,
    //双向绑定
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
//{{}}  但相数据绑定

//类似于以前的control控制器
export class AppComponent implements OnInit {
    title = '荣耀之地2';

    constructor(private _heroService: HeroService) {
    }

    getHeroes(){
        //this.heroes=this._heroService.getHeroes();
        //this._heroService.getHeroes().then(heroes => this.heroes = heroes);
         this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    //public heroes = HEROES;
    //public heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }


    ngOnInit(){
        this.getHeroes();
    }



}//一个组件类,控制一个视图的外观和行为


//
//var HEROES: Hero[] = [
//    { "id": 11, "name": "兰陵王" },
//    { "id": 12, "name": "艹曹" },
//    { "id": 13, "name": "吕布" },
//    { "id": 14, "name": "孙悟空" },
//    { "id": 15, "name": "刘备" },
//    { "id": 16, "name": "项羽" },
//    { "id": 17, "name": "刘邦" },
//    { "id": 18, "name": "诸葛孔明" },
//    { "id": 19, "name": "吕蒙" },
//    { "id": 20, "name": "猪八戒" }
//];
