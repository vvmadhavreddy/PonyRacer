import { Component } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { RaceComponent } from '../race/race.component';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  standalone: true,
  imports: [RaceComponent],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent {
  races: Array<RaceModel> = [];

  constructor(private raceService: RaceService) {
    this.raceService.list().subscribe(races => (this.races = races));
  }
}
