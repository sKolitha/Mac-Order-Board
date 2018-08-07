import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IItem, Item } from './item';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ItemService } from './item.service';
import { debounceTime, min } from '../../../node_modules/rxjs/operators';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({  
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  item:IItem =new Item();
  itemForm:FormGroup; 
  errors:string;
  pageTitle:string="Add Item";
  showBackButton:boolean=false;
  itemNumberMessage:string;
  itemDesc1Message:string;

  @ViewChild('itemnumber') idElementRef:ElementRef;
  @ViewChild('itemdescription1') descriptionElementRef:ElementRef;

  private itemNumberValidationMessages={
    required: "Please enter the item number.",
    minLength:"Please enter at least 4 charactors."
  }
  private itemDesc1ValidationMessages={
    required: "Please enter the item Description 1."
  }
  
  constructor(private formBuilder:FormBuilder,
    private itemService:ItemService,private route: ActivatedRoute,private router:Router) { }

  private initItem():IItem{
      return { 
        ItemNumber: null,       
        ItemDescription1:null,
        ItemDescription2:null,
        ItemReleaseNumber:null,
        EndItemCode:null,
        ProductCategory:null,
        UnitOfMeasure:null 
      }
  }  

  private initializeForm(){
    this.itemForm.patchValue({   
      itemDescription1:"",
      itemDescription2:"",
      itemReleaseNumber:"",
      endItemCode:"",
      productCategory:"",
      unitOfMeasure:""
    });
  }

  private onItemNumberChange(strnumber:string):void{
    this.initializeForm();  
    this.getItemData(strnumber||"");
  }


  getItemData(itemnumber:string):void {    
    this.itemService.getItemAsync(itemnumber).subscribe(
     (data)=>this.onItemDisplay(data),
     (error:any)=>this.errors=<any>error
   );
  }

  saveData():void{   

    if (this.itemForm.dirty && this.itemForm.valid) {      
      let i=Object.assign({},this.item,this.itemForm.value);
      //call the post/put method here
      //Didn't write the API call because it takes more time to create a fake API. 
      console.log(i);

      this.itemForm.reset();
      if (this.showBackButton){
        this.onBack();
      }
    }    
    
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

  private buildForm(newNumber:string){
    this.itemForm= this.formBuilder.group({
      itemNumber:[newNumber,[Validators.required,Validators.minLength(4)]],
      itemDescription1:["",Validators.required],
      itemDescription2:"",
      itemReleaseNumber:"",
      endItemCode:"",
      productCategory:"",
      unitOfMeasure:""
    })
  }

  private setItemNumberMessage(control:AbstractControl):boolean{
    this.itemNumberMessage="";
    if((control.touched || control.dirty) && control.errors){
      this.itemNumberMessage=Object.keys(control.errors)
      .map(key=>this.itemNumberValidationMessages[key]).join(' ');
    }

    if (this.itemNumberMessage.length>0){
      return true;
    }
    else{
      return false;
    }
  }
  private setItemDesc1Message(control:AbstractControl):boolean{
    this.itemDesc1Message="";
    if((control.touched || control.dirty) && control.errors){
      this.itemDesc1Message=Object.keys(control.errors)
      .map(key=>this.itemDesc1ValidationMessages[key]).join(' ');
    }

    if (this.itemDesc1Message.length>0){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit() {

    let id=this.route.snapshot.paramMap.get('Id'); 
      
    this.buildForm(id);
      
    if (this.itemForm.get('itemNumber').value!=="0"){
      this.itemForm.get('itemNumber').disable();
      this.descriptionElementRef.nativeElement.focus();
      this.pageTitle="Edit Item";
      this.showBackButton=true;
      this.onItemNumberChange(id);
    }
    else{
      this.itemForm.get('itemNumber').enable();    
      this.itemForm.get('itemNumber').reset();
      this.pageTitle="Add Item";
      this.showBackButton=false;
      this.idElementRef.nativeElement.focus();   
      
    }     
    const itemNumberControl=this.itemForm.get('itemNumber');
    itemNumberControl.valueChanges.pipe(debounceTime(500)).subscribe(value=>{      
      if (!this.setItemNumberMessage(itemNumberControl)){
        this.onItemNumberChange(value);
      }
    });
    const itemDesc1Control=this.itemForm.get('itemDescription1');
    itemDesc1Control.valueChanges.pipe(debounceTime(500)).subscribe(value=>{      
      this.setItemDesc1Message(itemDesc1Control);
    });
  }

  onBack(){
    this.router.navigate(['/orderlines']);
  }

}
