import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-toggle-switch',
  imports: [],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSwitchComponent {
  isChecked!: boolean;
  isDark!: boolean;


  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.isDark = this._theme.isDarkMode();
    this.isChecked = this.isDark;
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDark = mode == true;
    });
  }

  changeState(): void{
    this.isChecked = !this.isChecked;
    this._theme.changeState()
  }
}
