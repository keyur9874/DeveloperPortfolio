import { Component } from '@angular/core';

import { HeaderSectionComponent } from './header-section/header-section.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { achievementSection, introduction, myJourney, openSource, skillsSection, socialMediaLinks, splashScreen } from '../information';
import { ThemeService } from './theme.service';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderSectionComponent,
    IntroductionComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
