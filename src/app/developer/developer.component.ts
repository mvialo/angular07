import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { Developer } from '../models/developer.model'
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {


  skill2: Skill = { name: "Angular", logo: "logo2", site: "site2" };
  skill3: Skill = { name: "Jira", logo: "logo3", site: "site3" };
  skill1: Skill = { name: "Java", logo: "logo1", site: "site1" };
  developer1: Developer = {
    lastName: "Manuella", firstName: "VIALO", age: 65, gender: "Female", bio: "Je suis la meilleure développeuse Java qui râle quand ça ne marche",
    skills: [this.skill2, this.skill3, this.skill1]
  }



}






