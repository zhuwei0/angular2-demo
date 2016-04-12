import {Component, Input} from 'angular2/core';
import {Hero} from '../model/hero';
import {HeroService} from  '../service/hero.service'
//���fileһ���� component��β
@Component({  // ������@ componentװ��  ����Ԫ����  ָ��  ѡ��������   ����ʶ��������Ԫ�ء�
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
    inputs: ['name']  //�������Զ��� ָ��
    //,  providers: [HeroService]
})
//��Ҳ����Component��β
export class HeroDetailComponent {
         @Input('hero_set')  hero: Hero;

          name: String;

        constructor(private _heroService: HeroService) {
              this._heroService.getHeroes().then(heroes => this.ddfdk = heroes);
        }
}