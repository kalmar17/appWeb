import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { IntroInfo } from '../introInfo';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  intros: IntroInfo[] = [];
  constructor(private apiService: ApiService) { }
  
  ngOnInit() {

    // this.appSettingsService.getJSON().subscribe(data => {
    //   console.log(data);
    //   this.intros = data.intros;
    //   });
    this.Get();
  }

  Get() {
    this.apiService.getIntro()
      .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
            this.intros=val;
            console.log(this.intros);
                        
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
        
  } 
}
// {
//   "intros":[
//       {"title":"Pet wellness","titleMin":"We Take Care On Your Pet","image":"intro-icon-1.png","p":"To a deluxe apartment in the sky. And we`ll do it our way yes our way make all our dreams come true for me and you No phone no lights no motor","color":"default"},
//       {"title":"Pet wellness2","titleMin":"We Take Care On Your Pet","image":"intro-icon-2.png","p":"To a deluxe apartment in the sky. And we`ll do it our way yes our way make all our dreams come true for me and you No phone no lights no motor","color":"green"},
//       {"title":"Pet wellness3","titleMin":"We Take Care On Your Pet","image":"intro-icon-3.png","p":"To a deluxe apartment in the sky. And we`ll do it our way yes our way make all our dreams come true for me and you No phone no lights no motor","color":"yellow"}
//   ]
// }