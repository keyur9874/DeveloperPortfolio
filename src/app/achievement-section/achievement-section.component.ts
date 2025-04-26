import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { AchievementsComponent } from './achievements/achievements.component';
import { achievementSection } from '../../information';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-achievement-section',
  imports: [CommonModule, AchievementsComponent],
  templateUrl: './achievement-section.component.html',
  styleUrl: './achievement-section.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementSectionComponent {
  isDarkMode!: boolean;
  achievementSection = achievementSection;

  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.isDarkMode = this._theme.isDarkMode()
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDarkMode = mode == true
    })
  }
}
