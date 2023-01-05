export type CaseStatus =
  | 'AFI'
  | 'NL'
  | 'offered'
  | 'PreOP'
  | 'PosOP'
  | 'closed'
  | 'rejected';

export interface Case {
  id: string;
  createdDate: number;
  caseReferenceNumber: number;
  originatorName: string;
  firstApplicantName: string;
  secondApplicantName: string;
  postalCode: string;
  mortgageProductType: string;
  relationalManager: string;
  processOfficer: string;
  status: CaseStatus;
}
