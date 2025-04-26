import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-experience-card',
  imports: [
    CommonModule,
  ],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCardComponent {
  isDark = false;
  colorArrays = [];
  @Input('item') experience!: ExperienceCardModel;
  @ViewChild('imgRef', {static: false}) img!: ElementRef;

  constructor(private theme: ThemeService) {
  }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode()
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode
    })
  }

  // getColorArrays() {
  //   this.colorArrays = new ColorThief().getColor(this.img.nativeElement);
  // }

  // rgb() {
  //   return this.colorArrays.length === 0 ? 'rgb(0,0,0)' : 'rgb(' + this.colorArrays.join(', ') + ')';
  // }
}

export interface ExperienceCardModel {
  role: string,
  company: string,
  companyLogo: string,
  date: string,
  desc: string,
  short_note: string,
  keyNotes?: string[]
}

