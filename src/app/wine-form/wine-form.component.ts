import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Wine } from '../wine.model';
import { WineService } from '../services/wine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from '../core/core.service';
 
@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.scss']
})
export class WineFormComponent implements OnInit {
  wineForm: FormGroup
  wineInfos: any
  id: string
  message: string

  constructor(
    private _service: WineService, 
    private router: Router, 
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private _coreService: CoreService
    ) {
      this.wineForm = this._fb.group({
        name:'',
        year:1900,
        notes:'',
        price:'',
        vineyard:'',
        numberOfBottles:0
      })
      this.message=""
      this.id=""
    }

  ngOnInit(): void {
    this.id = <string>this.route.snapshot.paramMap.get('id')
        
    if (this.id ) {
      this.getBottleDetails(this.id);
      this.message="Bottle updated succesfuly!";
    }else{
      this.message="Bottle added succesfuly";
    }
    
    

  }

  getBottleDetails(id: string) {
    this._service.getBottleDetail(id).subscribe(response => {
        this.wineForm.patchValue(response);
      })
  }

  save() {
    if (this.wineForm.valid) {
      this.wineInfos = this.wineForm.value;
      this._service.createBootle(this.wineInfos).subscribe(
        {next: (wine:any)=>{
          this._coreService.openSnackBar(this.message);
          this.router.navigate([`/bottle-details`, wine.id])
          },
          error:(err: any)=>{
            this._coreService.openSnackBar(`there an erroe when try to save the bottle infos: ${err} `)
          }
        }
      )      
    }
  }

}
