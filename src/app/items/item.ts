export interface IItem{
    itemNumber: string;
    itemDescription1: string;
    itemDescription2: string;
    itemReleaseNumber: string;
    endItemCode: string;
    productCategory: string;
    unitOfMeasure: string;
    inactive: boolean;
}

export class Item implements IItem{
    itemNumber: string;
    itemDescription1: string;
    itemDescription2: string;
    itemReleaseNumber: string;
    endItemCode: string;
    productCategory: string;
    unitOfMeasure: string;
    inactive: boolean;
}
