import { Component, OnInit } from '@angular/core';
import { skillArray } from 'src/app/const/skill';
import { Iskill } from 'src/app/interface/interface';

@Component({
  selector: 'app-ng-switch-tab',
  templateUrl: './ng-switch-tab.component.html',
  styleUrls: ['./ng-switch-tab.component.scss']
})
export class NgSwitchTabComponent implements OnInit {
  numsValue = 10;
  numsValue2 = 25;
  selectedSkillset : string = "javaScript"
  selectedSkillset2 : string = "html 5"
  skillsArray : Array<Iskill> = skillArray;
  constructor() { }
  ngOnInit(): void {
  }
  selectedSkill(skill : string){
    this.selectedSkillset = skill;
  }
}
