import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { skillsSection } from '../../information';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-software-skills',
  imports: [CommonModule],
  templateUrl: './software-skills.component.html',
  styleUrl: './software-skills.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareSkillsComponent {
  skills = skillsSection
  softwareSkills = skillsSection.softwareSkills;
  skillsSectionHeading = skillsSection.softwareSkillsHeader;
  isDark!: boolean;
  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this._theme.isDarkMode();
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDark = mode == true;
    })
  }
}
