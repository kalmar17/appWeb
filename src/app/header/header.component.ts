import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menus:Menu[] = [];
  constructor(private apiService: ApiService ) { }
  
  ngOnInit() {
    // this.appSettingsService.getJSON().subscribe(data => {
    //   console.log(data);
    //   this.menus = data.menus;});

    // this.Get();
  }
  
  Get() {
    this.apiService.getMenu()
      .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
            this.menus=val;
            console.log(this.menus);
                        
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
        
  } 


}
