import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadCovidTestReportService {

  approvalStageMessageStatus = new BehaviorSubject([]);
  currentApprovalStageMessage = this.approvalStageMessageStatus.asObservable();

  constructor() { }

  updateApprovalMessageStatus(message: any) {
    this.approvalStageMessageStatus.next(message)
    }
}
