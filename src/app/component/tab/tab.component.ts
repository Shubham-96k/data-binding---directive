import { Component, OnInit } from '@angular/core';
import { Iskill } from 'src/app/interface/interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedSkillSet : string = 'javaScript'; //manually updated active value
  skillsArray : Array<Iskill> = [
    {
      skillName : 'javascript',
      content : `<strong>Javascript</strong>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in esse atque! Nisi cumque labore dolorum magni sapiente eum soluta obcaecati architecto blanditiis, eaque cum eius odit ea at fugiat.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laborum doloremque quidem cumque maxime tempora odio rem, quis tempore aliquid facere autem pariatur! Illum tempore laudantium optio harum, atque facere!`
    },
    {
      skillName : 'angular',
      content : `<strong>Angular</strong>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in esse atque! Nisi cumque labore dolorum magni sapiente eum soluta obcaecati architecto blanditiis, eaque cum eius odit ea at fugiat.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laborum doloremque quidem cumque maxime tempora odio rem, quis tempore aliquid facere autem pariatur! Illum tempore laudantium optio harum, atque facere!`
    },
    {
      skillName : 'node',
      content : `<strong>Node Js</strong>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in esse atque! Nisi cumque labore dolorum magni sapiente eum soluta obcaecati architecto blanditiis, eaque cum eius odit ea at fugiat.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laborum doloremque quidem cumque maxime tempora odio rem, quis tempore aliquid facere autem pariatur! Illum tempore laudantium optio harum, atque facere!`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  // skillset(skill : string){//after click this call back function get called
  //   console.log(skill);
  //   this.selectedSkillSet = skill;
  //   //here on which li user click that value will set on selectedskillset and that li will active
  // }
}
