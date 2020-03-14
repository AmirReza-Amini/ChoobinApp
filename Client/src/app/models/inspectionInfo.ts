export class InspectionInfo {
    ReceiptID: number = 0;
    ReceiptNo: string = "";
    BLNo: string = "";
    BLTypeName: string = "";
    ConsigneeName: String = "";
    CntrNo: string = "";
    CntrTypeName: string = "";
    CntrSize: number = 0;
    SelectedItem: boolean = false;

    EvaluationID: number;
    ReceiptCntrConsigneeID: number;
    ActID: number;
    EvaluationType: number;
    EvaluationReason: number;
    EvaluationReqDate: Date;
    PredictEvaluationDate: Date;
    EvaluationSequence: number;
    Issued: boolean;
    Turn: number;
    UserId: number;
    UserType: number;
    WebUser: string;

    EvaluationReasonName: string;
    EvaluationTypeName: string;
}