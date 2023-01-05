export type RewardStatus = 'invited' | 'registered' | 'expired';

export interface Reward {
  id: string;
  date: number;
  reportReferenceNumber: number;
  relationshipManager: string;
  originatorName: string;
  originatorContact: string;
  friendName: string;
  phoneNumber: string;
  emailId: string;
  caseId: string;
  status: RewardStatus;
}
