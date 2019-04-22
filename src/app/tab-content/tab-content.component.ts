import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../tab'

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  @Input() tab: Tab;

  constructor() { }

  ngOnInit() {
  }

}
