

export class StripInfo {
    ReceiptID: number = 0;
    ReceiptNo: string = "";
    BLNo: string = "";
    BLTypeName: string = "";
    ConsigneeName: String = "";
    CntrNo: string = "";
    CntrTypeName: string = "";
    CntrSize: number = 0;
    SelectedItem: boolean = false;

    StripID: number;
    ReceiptCntrConsigneeID: number;
    ActID: number;
    StripType: number;
    PredictedStripVolume:number;
    StripDestination: number;
    StripNeedToSeal: boolean;
    StripNeedMovement: boolean;
    PredictStripDate: Date;
    StripSequence: number;
    StripRequestDate:Date
    Issued: boolean;
    Turn: number;
    UserId: number;
    UserType: number;
    WebUser: string;
    ContractorId:number;
    IsSpecialStrip:boolean;
    IsForSina:boolean;
    
    StripTypeName: string;
    StripDestinationName: string;
}