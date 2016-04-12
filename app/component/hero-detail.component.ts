import {Component, Input} from 'angular2/core';
import {Hero} from '../model/hero';
import {HeroService} from  '../service/hero.service'
//组件file一般以 component结尾
@Component({  // 我们用@ component装饰  创建元数据  指定  选择器名称   来标识这个组件的元素。
    selector: 'my-hero-detail',
    template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
       <label>{{name}} </label>

        <!--<label>{{ddfdk[1].name}} </label>-->
    </div>
  </div>
`,
    inputs: ['name']  //类似于自定义 指令
    //,  providers: [HeroService]
})
//类也是以Component结尾
export class HeroDetailComponent {
         @Input('hero_set')  hero: Hero;

          name: String;

        constructor(private _heroService: HeroService) {
              this._heroService.getHeroes().then(heroes => this.ddfdk = heroes);
        }
}