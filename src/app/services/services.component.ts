import { Component, OnInit } from '@angular/core';
import { TABS } from '../tabs'
import { Tab } from'../tab'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
  
})
export class ServicesComponent implements OnInit {

  tabs = TABS;
  selectedTab: Tab;
  constructor() {
    this.selectedTab = this.tabs[0];
   }

  ngOnInit() {

  }
  Enter(e){
    console.log(e);
  }
  onSelect(tab:Tab){
    this.selectedTab = tab;
  }
}
