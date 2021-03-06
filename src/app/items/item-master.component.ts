import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IItem, Item } from './item';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ItemService } from './item.service';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';
import { OrderService } from '../orders/order.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
templateUrl: './item-master.component.html',
styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit,OnDestroy {

item:  IItem = new Item();
itemForm:  FormGroup = null; 
errors:  string = '';
pageTitle:  string = 'Add/Edit Item';
editingItem:  boolean = false;
itemNumberMessage:  string = '';
itemDesc1Message:  string = '';
canMakeInactive: boolean = true;
private sub:  Subscription = null;

@ViewChild('itemnumber') idElementRef:  ElementRef;
@ViewChild('itemdescription1') descriptionElementRef:  ElementRef;

itemNumberValidationMessages = {
    required: "Please enter the item number.",
    minLength:  "Please enter at least 4 charactors."
}
itemDesc1ValidationMessages = {
    required: "Please enter the item Description 1."
}

constructor(private formBuilder:  FormBuilder,
private itemService:  ItemService,
private route: ActivatedRoute,
private router:  Router,
private orderService: OrderService,
private toastr: ToastrService ) { }



onItemDisplay(item:  IItem):  void{ 
    this.item=item;
    if (this.item){
        this.editingItem = true;
        this.itemForm.patchValue({
            itemnumber:  this.item.itemNumber,
            itemDescription1:  this.item.itemDescription1,
            itemDescription2:  this.item.itemDescription2,
            itemReleaseNumber:  this.item.itemReleaseNumber,
            endItemCode:  this.item.endItemCode,
            productCategory:  this.item.productCategory,
            unitOfMeasure:  this.item.unitOfMeasure,
            inactive:  this.item.inactive
        });
    } else {
        this.editingItem = false;
    }

} 

onItemNumberChange(strnumber:  string):  void{
    this.initializeForm();
    this.getItemData(strnumber || '');
}

initializeForm(){
    this.itemForm.patchValue({ 
        itemDescription1:  '',
        itemDescription2:  '',
        itemReleaseNumber:  '',
        endItemCode:  '',
        productCategory:  '',
        unitOfMeasure:  '',
        inactive: false
    });
}

getItemData(itemnumber:  string):  void {
    this.sub = this.itemService.getItemAsync(itemnumber).subscribe(
    (data) => this.onItemDisplay(data),
    (error:  any) => this.errors = <any>error
    );
}

buildForm(newNumber:  string){
    this.itemForm = this.formBuilder.group({
        itemNumber:  [newNumber,[Validators.required,Validators.minLength(4)]],
        itemDescription1:  ['',Validators.required],
        itemDescription2:  '',
        itemReleaseNumber:  '',
        endItemCode:  '',
        productCategory:  '',
        unitOfMeasure:  '',
        inactive: false
    },{ validator: this.canItemMakeInactiveValidator})
} 



canItemMakeInactiveValidator: ValidatorFn = (fg: FormGroup) => {

    this.canMakeInactive = true;

    const inactiveValue = fg.get('inactive').value;
    const itemNumberValue = fg.get('itemNumber').value;

    if (itemNumberValue){
        if (inactiveValue){
          this.sub =  this.orderService.isItemInOpenOrders(itemNumberValue).subscribe(
            (data: boolean) => this.canMakeInactive = !data);
               
       }        
    }
    if (!this.canMakeInactive){
        fg.get("inactive").setErrors({'canItemMakeInactive': !this.canMakeInactive});
        this.toastr.warning('Cannot make the item inactive. There are open sales orders for this item','Warning');
        return {'canItemMakeInactive': !this.canMakeInactive};
    } else {
        fg.get("inactive").setErrors(null);        
        return null;
    }
};

ngOnInit() {

    const id=this.route.snapshot.paramMap.get('Id') || '0'; 
    this.buildForm(id);
        if (this.itemForm.get('itemNumber').value === '0'){
            //add new item
            this.itemForm.get('itemNumber').enable();
            this.itemForm.get('itemNumber').reset();
            this.editingItem = false;
            if (this.idElementRef){
                this.idElementRef.nativeElement.focus();
            }
            
        }else {
            //edit item 
            this.itemForm.get('itemNumber').disable();
            if (this.descriptionElementRef) {
                 this.descriptionElementRef.nativeElement.focus();
            }           
            this.editingItem = true;
            this.onItemNumberChange(id);
        }
    
        //subscribe value change to fire valisdation and other events
        const itemNumberControl = this.itemForm.get('itemNumber');
        this.sub = itemNumberControl.valueChanges.pipe(debounceTime(500)).subscribe(value=>{
        if (!this.setItemNumberMessage(itemNumberControl)){
            this.onItemNumberChange(value);
        }
        });

        //subscribe value change to fire valisdation and other events
        const itemDesc1Control = this.itemForm.get('itemDescription1');
        this.sub = itemDesc1Control.valueChanges.pipe(debounceTime(500)).subscribe(value=>{
        this.setItemDesc1Message(itemDesc1Control);
    });
} 




saveData():  void{ 
    if (this.itemForm.dirty) {
        if (this.itemForm.valid) {
            const i = { ...this.item, ...this.itemForm.value };        
            if (this.editingItem){            
                this.sub = this.itemService.updateItemAsync(i).subscribe(
                    (data) => this.onSaveCompleted(data), 
                    (error:  any) => this.errors = <any>error
                );
            
            } else {
                this.sub = this.itemService.addItemAsync(i).subscribe(
                    (data) => this.onSaveCompleted(data),
                    (error:  any) => this.errors = <any>error
                );
            }     
        }   
    } else {
        this.toastr.info('No changes to update.','Information');
    }

}
onSaveCompleted(data):  void{
    console.log(data);//temporary line to show the data object after the fake db operation.
    this.itemForm.reset();
    this.itemForm.get('itemNumber').enable();
    if (this.idElementRef){
        this.idElementRef.nativeElement.focus();
    }
    this.toastr.success('Record successfully updated to the console.','Success');
    if (this.editingItem){
        this.onBack();
    }
}

onBack(){
    this.router.navigate(['/orderlines']);
}

OnDelete() {
    this.toastr.info('This method is not implemented.','Information');
}

OnReset() {
    this.itemForm.reset();
    if (this.idElementRef){
        this.idElementRef.nativeElement.focus();
    }
}

ngOnDestroy(){
this.sub.unsubscribe();
}

setItemNumberMessage(control:  AbstractControl):  boolean{
this.itemNumberMessage = '';
    if((control.touched || control.dirty) && control.errors){
        this.itemNumberMessage=Object.keys(control.errors)
        .map(key => this.itemNumberValidationMessages[key]).join(' ');
    }

    if (this.itemNumberMessage.length>0){
        return true;
    }else {
        return false;
    }
}

setItemDesc1Message(control:  AbstractControl):  boolean {
    this.itemDesc1Message = '';
    if((control.touched || control.dirty) && control.errors){
        this.itemDesc1Message=Object.keys(control.errors)
        .map(key => this.itemDesc1ValidationMessages[key]).join(' ');
    }

    if (this.itemDesc1Message.length>0){
        return true;
    }else {
        return false;
    }
}
}
