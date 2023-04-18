import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { Wine } from '../wine.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  constructor(private service: WineService, private router: Router) { }

  ngOnInit(): void {
    this.getWines()
  }

  bottlesList: any
  displayedColumns: string[] = ['id', 'name', 'year', 'notes', "price"];
  
  
  showDetails =  (row:Wine) => {
    this.router.navigate([`/bottle-details`, row.id])
  }

  getWines() {
    this.service.getBottles().subscribe(response => {
      this.bottlesList = response
    })
  }

  
}
