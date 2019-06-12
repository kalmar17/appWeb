import { Component } from '@angular/core';
import { AppSettingsService } from './AppSettingsService';
import { IntroInfo } from './introInfo';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appWeb';
  menus:Menu[] = [];

  constructor( private appSettingsService : AppSettingsService ) { }
  ngOnInit() {

    this.appSettingsService.getJSON().subscribe(data => {
      console.log(data);
      this.menus = data.menus;});
  }
}
