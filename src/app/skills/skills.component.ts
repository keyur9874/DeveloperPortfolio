import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { skillsSection } from '../../information';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  isDark: boolean = false;
  skillsImage!: string;
  skillsSection = skillsSection;

  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.skillsImage = skillsSection.skillsAvatar;
    this.isDark = this._theme.isDarkMode();
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDark = mode == true;
    })
  }
}
