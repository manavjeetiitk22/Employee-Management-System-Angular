import { Component,OnInit,inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../models/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  
  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  
  masterService = inject(MasterService)

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((result:APIResponseModel)=>{
      this.designationList = result.data;
      this.isLoader=false;
    },error=>{
      alert("API error")
      this.isLoader=false;
    })
  }

}
