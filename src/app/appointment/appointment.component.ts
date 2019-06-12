import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  InUser:User = new User()
  constructor(private apiService: ApiService){}

  ngOnInit() {
  }
  Send(user:User) {
    console.log(JSON.stringify(this.InUser));
    this.apiService.sendAppointment(JSON.stringify(this.InUser))
      .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
                        alert("Ваша заявка принята!")
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  } 
}
