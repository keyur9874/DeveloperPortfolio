import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { introduction } from '../../information';
import { ThemeService } from '../theme.service';
import { ButtonComponent } from '../button/button.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  imports: [
    CommonModule,
    ButtonComponent,
    SocialMediaComponent
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionComponent {
  isDark = true;
  greeting = introduction;
  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this._theme.isDarkMode()
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDark = mode == true
    })
  }
}
