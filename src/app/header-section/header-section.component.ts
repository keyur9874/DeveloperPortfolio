import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { achievementSection, introduction, myJourney, openSource, skillsSection, socialMediaLinks, splashScreen } from '../../information';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';
import { ToggleSwitchComponent } from '../toggle-switch/toggle-switch.component';

@Component({
  selector: 'app-header-section',
  imports: [
    CommonModule, 
    ToggleSwitchComponent
  ],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSectionComponent {
  isDark!:boolean;
  greeting = introduction;
  information = {
    introduction,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    myJourney,
    openSource,
    achievementSection
  }

  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this._theme.isDarkMode();
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDark = mode;
    });
  }

}
