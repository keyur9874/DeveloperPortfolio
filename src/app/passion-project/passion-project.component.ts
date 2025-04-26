import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { openSource, socialMediaLinks } from '../../information';
import { ThemeService } from '../theme.service';
import { GithubService } from '../github.service';
import { ProjectComponent } from './project/project.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-passion-project',
  imports: [ProjectComponent, ButtonComponent],
  templateUrl: './passion-project.component.html',
  styleUrl: './passion-project.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassionProjectComponent {
  passionProjects = openSource;
  repo = [];
  isDarkMode!: boolean;
  socialMediaLinks = socialMediaLinks;

  constructor(private _theme: ThemeService, private _github: GithubService) {}

  ngOnInit(): void {
    this.isDarkMode = this._theme.isDarkMode();
    this._theme.darkTheme$.subscribe((mode: boolean) => {
      this.isDarkMode = mode == true;
    });
    this._github.getData().subscribe((res: any) => (this.repo = res));
    this._github.initializeRepoData();
    console.log(this.repo);
  }
}
