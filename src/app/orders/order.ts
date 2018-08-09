export interface  IOrder{
ID: number;
OrderNumber: string;
OrderDate: string;
OrderType: string;
CustomerNumber: string;
CustomerName: string;
CurrencyCode: string;
AccountsReceivableReference: string;
AccountsReceivableTermsCode: string;
AccumulatedFreightAmount: number;
AccumulatedMiscellaneousChargesAmount: number;
AccumulatedSalesTaxAmount: number;
AccumulatedTotalSalesAmount: number;
AccumulatedTotalTaxableAmount: number;
AwardProbability: number;
BillToAddressLine1: string;
BillToAddressLine4: string;
BillToCity: string;
BillToCountry: string;
BillToCustomerName: string;
BillToCustomerNumber: string;
BillToState: string;
BillToZip: string;
CommissionAmount: number;
CommissionPercent: number;
ContactEmailAddress: string;
ContactName: string;
ContactPhoneNumber: string;
CurrencyTransactionRate: number;
CustomerBalanceMethod: string;
CustomerOrderComments: ICustomerordercomment[];
DetermineRateBy: string;
DiscountPercent: number;
EdiCode: string;
EDIDocumentSequence: number;
EnteredDate: string;
ExtraField10: number;
ExtraField11: number;
ExtraField12: number;
ExtraField13: number;
ExtraField14: number;
ExtraField15: number;
FormNumber: number;
FreightAmount: number;
FreightCostCenter: string;
FreightCostUnit: string;
FreightGLAccountNumber: string;
FreightPayCodeLiteral: IFreightpaycodeliteral[];
FreightPaymentCode: string;
FreightPaymentName: string;
HoldCode: string;
InvoiceNumber: string;
IsBillToFreeForm: boolean;
IsClosed: boolean;
IsCopyToBillOfMaterial: boolean;
IsExchangeRate: boolean;
IsMultipleLocation: boolean;
IsOrderTaxable: boolean;
IsPartiallyPosted: boolean;
IsPrepayment: boolean;
IsShipToFreeForm: boolean;
ManufacturingLocation: string;
MiscellaneousAmount: number;
MiscellaneousCostCenter: string;
MiscellaneousCostUnit: string;
MiscellaneousGLAccountNumber: string;
OECashNumber: string;
OriginalTransactionRate: number;
PackingSlipNumber: number;
PaymentAmount: number;
PaymentDiscountAmount: number;
PreSelectStatus: string;
ProgTermNumber: number;
PurchaseOrderNumber: string;
ReturnMaterialAuthorizationNumber: string;
RowVersion: string;
SalespersonCommissionAmount: number;
SalespersonCommissionAmount2: number;
SalespersonCommissionAmount3: number;
SalespersonNumber: number;
SalespersonNumber2: number;
SalespersonNumber3: number;
SalespersonPercentCommission: number;
SalespersonPercentCommission2: number;
SalespersonPercentCommission3: number;
SalesTaxAmount1: number;
SalesTaxAmount2: number;
SalesTaxAmount3: number;
SelectionCode: string;
ShipToAddressLine1: string;
ShipToAddressLine4: string;
ShipToCity: string;
ShipToCountry: string;
ShipToName: string;
ShipToState: string;
ShipToZip: string;
ShipViaCode: string;
Status: string;
TaxCode: string;
TaxPercent: number;
TaxPercent2: number;
TaxPercent3: number;
TotalCost: number;
TotalDollars: number;
TotalSaleAmt: number;
TotalSalesDiscount: number;
TotalTaxableAmount: number;
TotalTaxableCost: number;
TotalWeight: number;
Messages:string[];
MessagesStr: string;

}
export interface ICustomerordercomment{
    ID:number;
    Comment:string;
    CommentType:string;
    OrderNumber:string;
    OrderType:string;
    LevelNumber:string;
    LineSequenceNumber:number;
    SequenceNumber:number;
    Extra10:number;
    Extra11:number;
    Extra12:number;
    Extra13:number;
    Extra14:number;
    Extra15:number;
    RowVersion:string;
}
export interface IFreightpaycodeliteral{
    Key:string;
    Value:string;    
}
