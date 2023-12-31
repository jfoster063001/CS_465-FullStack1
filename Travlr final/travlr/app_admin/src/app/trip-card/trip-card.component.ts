import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
   }

   editTrip(trip: Trip): void {
    console.log('TripCardComponent#editTrip setting tripCode in localStorage', trip.code);
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    console.log('TripCardComponent#editTrip routing to TripEditComponent');
    this.router.navigate(['edit-trip']);
  }

}
