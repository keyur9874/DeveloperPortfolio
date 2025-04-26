import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { HeaderSectionComponent } from './header-section/header-section.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { achievementSection, introduction, myJourney, openSource, skillsSection, socialMediaLinks, splashScreen } from '../information';
import { ThemeService } from './theme.service';
import { SkillsComponent } from './skills/skills.component';
import { SoftwareSkillsComponent } from './software-skills/software-skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { PassionProjectComponent } from './passion-project/passion-project.component';
import { AchievementSectionComponent } from './achievement-section/achievement-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderSectionComponent,
    IntroductionComponent,
    SkillsComponent,
    SoftwareSkillsComponent,
    WorkExperienceComponent,
    PassionProjectComponent,
    AchievementSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isDarkMode!: boolean;
  selectedTab = 0;
  tabCount = 8;
  information = {
    introduction,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    myJourney,
    openSource,
    achievementSection
  }

  constructor(private _theme: ThemeService) {
  }

  ngOnInit(): void {
    this.isDarkMode = this._theme.isDarkMode();
    this._theme.darkTheme$.subscribe((mode: boolean) => {
      this.isDarkMode = mode == true;
    })
  }
}
