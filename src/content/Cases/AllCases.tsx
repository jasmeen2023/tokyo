import { Case } from '@/models/case';

import CasesTable from './CasesTable';

function RecentOrders() {
  const cases: Case[] = [
    {
      id: '1',
      createdDate: new Date().getTime(),
      caseReferenceNumber: 128000,
      originatorName: 'Chad Hodges',
      firstApplicantName: 'Jose Griffin',
      secondApplicantName: 'Jose Griffin',
      postalCode: 'N17 0NP',
      mortgageProductType: 'Jose Griffin',
      relationalManager: 'Don Torres (me)',
      processOfficer: 'Philip Nash',
      status: 'offered',
    },
    {
      id: '2',
      createdDate: new Date().getTime(),
      caseReferenceNumber: 128000,
      originatorName: 'Chad Hodges',
      firstApplicantName: 'Jose Griffin',
      secondApplicantName: 'Jose Griffin',
      postalCode: 'N17 0NP',
      mortgageProductType: 'Jose Griffin',
      relationalManager: 'Don Torres (me)',
      processOfficer: 'Philip Nash',
      status: 'offered',
    },
  ];

  return <CasesTable cases={cases} />;
}

export default RecentOrders;
