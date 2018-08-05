import { Component, OnInit } from '@angular/core';
import { IItem, Item } from './item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  item:IItem =new Item();
  itemForm:FormGroup;
  formError:FormGroup;
  errors:string;
  
  constructor(private formBuilder:FormBuilder,
    private itemService:ItemService) { }

  saveData():void{  
 
    this.findItemNumber("001");
    // stop here if form is invalid
    if (this.itemForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
  }
  getItemData(itemnumber:string):void {    
    this.itemService.getItemAsync(itemnumber).subscribe(
      (t:IItem)=>this.item=t,
      (error:any)=>this.errors=<any>error
    );
  }

  initForm():void{

  }

  findItemNumber(strnumber:string):void{
    //let strnumber:string="001";
    this.getItemData(strnumber);

    if (!this.itemForm){
      this.itemForm.reset();
    }

    this.itemForm.patchValue({
      itemnumber:this.item.ItemNumber,
      itemDescription1:this.item.ItemDescription1,
      itemDescription2:this.item.ItemDescription2,
      itemReleaseNumber:this.item.ItemReleaseNumber,
      endItemCode:this.item.EndItemCode,
      productCategory:this.item.ProductCategory,
      unitOfMeasure:this.item.UnitOfMeasure
    });

  }
  ngOnInit() {
    this.itemForm= this.formBuilder.group({
      itemNumber:["",Validators.required],
      itemDescription1:["",Validators.required],
      itemDescription2:"",
      itemReleaseNumber:"",
      endItemCode:"",
      productCategory:"",
      unitOfMeasure:""
    })
    this.formError=this.itemForm;
  }

 

}
