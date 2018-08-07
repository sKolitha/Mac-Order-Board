export interface IItem{
    ItemNumber:string;
    ItemDescription1:string;
    ItemDescription2:string;
    ItemReleaseNumber:string;
    EndItemCode:string;
    ProductCategory:string;
    UnitOfMeasure:string
}

export class Item implements IItem{
    ItemNumber:string;
    ItemDescription1:string;
    ItemDescription2:string;
    ItemReleaseNumber:string;
    EndItemCode:string;
    ProductCategory:string;
    UnitOfMeasure:string
}