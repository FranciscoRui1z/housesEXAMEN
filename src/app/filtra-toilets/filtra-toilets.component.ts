import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-filtra-toilets',
  standalone: true,
  imports: [RouterModule, CommonModule, HousingLocationComponent, ReactiveFormsModule, NgIf],
  templateUrl: './filtra-toilets.component.html',
  styleUrl: './filtra-toilets.component.css'
})
export class FiltraToiletsComponent implements OnInit {

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  private housingService = inject(HousingService);

  ngOnInit(): void {
    this.housingService.getAllHousingLocations().then(locations => {
      this.housingLocationList = locations;
      this.filteredLocationList = this.housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

   let pedro = Number(text);

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.toiletNum == pedro
    );
  }
}
