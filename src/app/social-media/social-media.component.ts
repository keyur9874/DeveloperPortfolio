import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { socialMediaLinks } from '../../information';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaComponent {
  isDark: boolean = false;
  socialMediaLinks = socialMediaLinks;

  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this._theme.isDarkMode();
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDark = mode == true;
    })
  }
}
