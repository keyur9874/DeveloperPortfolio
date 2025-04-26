import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { myJourney } from '../../information';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-work-experience',
  imports: [ExperienceCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent {
  isDark = false;
  workExperience = myJourney

  constructor(private _theme: ThemeService) {
  }

  ngOnInit(): void {
    this.isDark = this._theme.isDarkMode()
    this._theme.darkTheme$.subscribe((mode: boolean) => {
      this.isDark = mode == true
    })
  }
}
