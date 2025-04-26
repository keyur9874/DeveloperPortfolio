import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  @Input() repo!: {node: any};
  isDarkMode!: boolean;

  constructor(private _theme: ThemeService) { }

  ngOnInit(): void {
    this.isDarkMode = this._theme.isDarkMode()
    this._theme.darkTheme$.subscribe((mode: boolean)=>{
      this.isDarkMode = mode == true
    })
  }

  formatFileSizeDisplay = (value: any) => {
    if (value < 1024) {
      return `${value} KB`;
    }
    return `${parseFloat((value / 1024).toFixed(1))} MB`;
  };


  openUrlInNewTab(url: string, name: string) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win?.focus();
  }

}
