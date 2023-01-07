export type DocumentStatus =
  | 'AFI'
  | 'NL'
  | 'offered'
  | 'PreOP'
  | 'PosOP'
  | 'closed'
  | 'rejected';

export interface Document {
  id: string;
  uploadedDate: number;
  documentType: string;
  applicant1Name: string;
  applicant2Name: string;
  status: DocumentStatus;
}
