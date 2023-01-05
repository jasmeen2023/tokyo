export type ReportStatus =
  | 'AFI'
  | 'NL'
  | 'offered'
  | 'PreOP'
  | 'PosOP'
  | 'closed'
  | 'rejected';

export interface Report {
  id: string;
  createdDate: number;
  reportReferenceNumber: number;
  originatorName: string;
  firstApplicantName: string;
  secondApplicantName: string;
  postalCode: string;
  mortgageProductType: string;
  relationalManager: string;
  processOfficer: string;
  status: ReportStatus;
}
