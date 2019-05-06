import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, OnChanges {
  @Input() size: string;
  @Input() name: string;
  icon: string;

  constructor() { }

  ngOnInit() {
   this.updateIcon();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateIcon();
  }

  updateIcon() {
    switch (this.name) {
      case 'snow':
        this.icon = 'snowflake';
        break;
      case 'rain':
        this.icon = 'cloud-rain';
        break;
      case 'storm':
        this.icon = 'poo-storm';
        break;
      case 'clouds':
        this.icon = 'cloud';
        break;
      case 'sun':
        this.icon = 'sun';
        break;
    }
  }

}
