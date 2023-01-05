import { Reward } from '@/models/reward';

import RewardsTable from './RewardsTable';

function RecentOrders() {
  const rewards: Reward[] = [
    {
      id: '1',
      date: new Date().getTime(),
      relationshipManager: 'Chad Hodges',
      reportReferenceNumber: 128000,
      originatorName: 'Chad Hodges',
      originatorContact: '+41-985478655',
      friendName: 'Jose Griffin',
      phoneNumber: '+41-985478655',
      emailId: 'Malisa.Bnalr@gmail.com',
      caseId: 'ID987145',
      status: 'invited',
    },
    {
      id: '1',
      date: new Date().getTime(),
      relationshipManager: 'Chad Hodges',
      reportReferenceNumber: 128000,
      originatorName: 'Chad Hodges',
      originatorContact: '+41-985478655',
      friendName: 'Jose Griffin',
      phoneNumber: '+41-985478655',
      emailId: 'Malisa.Bnalr@gmail.com',
      caseId: 'ID987145',
      status: 'expired',
    },
    {
      id: '1',
      date: new Date().getTime(),
      relationshipManager: 'Chad Hodges',
      reportReferenceNumber: 128000,
      originatorName: 'Chad Hodges',
      originatorContact: '+41-985478655',
      friendName: 'Jose Griffin',
      phoneNumber: '+41-985478655',
      emailId: 'Malisa.Bnalr@gmail.com',
      caseId: 'ID987145',
      status: 'registered',
    },
  ];

  return <RewardsTable rewards={rewards} />;
}

export default RecentOrders;
