import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Wine } from '../wine.model';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.scss']
})

export class WineDetailsComponent implements OnInit {
  public id: any
  public details: any
  

  constructor(
    private service: WineService, 
    private route: ActivatedRoute, 
    private router: Router,
    private _coreService: CoreService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getBottleDetails(this.id)
  }

  getBottleDetails(id: string) {
    this.service.getBottleDetail(id).subscribe(response => {
      this.details = response;
    })
  }

  editBottle(id: string) {
    this.router.navigate([`/edit-bottle/${id}`])
  }

  deleteBottle(id: string) {
    this.service.deleteBottle(id).subscribe(
      {next: (isDeleted:any)=>{
        this._coreService.openSnackBar("The bottle was removed");
        this.router.navigate([''])
        },
        error:(err: any)=>{
          this._coreService.openSnackBar(`there an error when try to delete the bottle infos: ${err} `)
        }
      }
    )
  }
}
