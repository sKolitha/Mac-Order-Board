import { Component, OnInit } from '@angular/core';
import { IItem, Item } from './item';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from './item.service';
import { debounceTime } from '../../../node_modules/rxjs/operators';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { DISABLED } from '../../../node_modules/@angular/forms/src/model';

@Component({
  //selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  item:IItem =new Item();
  itemForm:FormGroup;
  formError:FormGroup;
  errors:string;
  pageTitle:string="Add/Edit Item";
  
  constructor(private formBuilder:FormBuilder,
    private itemService:ItemService,private route: ActivatedRoute,private router:Router) { }

  initItem():IItem{
      return { 
        ItemNumber: null,       
        ItemDescription1:null,
        ItemDescription2:null,
        ItemReleaseNumber:null,
        EndItemCode:null,
        ProductCategory:null,
        UnitOfMeasure:null,
        IsActive:false      
      }
  }  

  getItemData(itemnumber:string):void {    
    this.itemService.getItemAsync(itemnumber).subscribe(
     (t)=>this.onItemDisplay(t),
     (error:any)=>this.errors=<any>error
   );
  }

  saveData():void{   
    if (this.itemForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)');
    this.onBack();
  }

  initializeForm(){
    this.itemForm.patchValue({      
      itemDescription1:"",
      itemDescription2:"",
      itemReleaseNumber:"",
      endItemCode:"",
      productCategory:"",
      unitOfMeasure:""
    });
  }

  onItemNumberChange(strnumber:string):void{
    this.initializeForm();  
    this.getItemData(strnumber);
  }

  onItemDisplay(item:IItem):void{   
    this.item=item;
    if (this.item){      
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

  }

  ngOnInit() {

    let id=this.route.snapshot.paramMap.get('Id');    

    this.itemForm= this.formBuilder.group({
      itemNumber:[id,Validators.required],
      itemDescription1:["",Validators.required],
      itemDescription2:"",
      itemReleaseNumber:"",
      endItemCode:"",
      productCategory:"",
      unitOfMeasure:""
    })
    
  // (blur)="onItemNumberChange(itemForm.get('itemNumber')?.value)"
  
      //this.onItemNumberChange(id.toString());
      
      if (this.itemForm.get('itemNumber').value!=="0"){
        this.itemForm.get('itemNumber').disable();
        this.pageTitle="Edit Item";
      }
      else{
        this.itemForm.get('itemNumber').enable();
        this.pageTitle="Add Item";
      }

      this.itemForm.get('itemNumber').valueChanges.
      pipe(debounceTime(500)).subscribe(value=>this.onItemNumberChange(value));
    //this.formError=this.itemForm;
  }
  onBack(){
    this.router.navigate(['/orderlines']);
  }
  /*ngOnInit(){
     if (this.itemForm){
      this.itemForm.reset();
    } 
  }*/

 
 

}
