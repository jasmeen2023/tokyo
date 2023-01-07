import { Document } from '@/models/document';

import DocumentTable from './DocumentTable';

function RecentDocuments() {
  const documents: Document[] = [
    {
      id: '1',
      uploadedDate: new Date().getTime(),
      documentType: 'proff of address',
      applicant1Name: 'Carlo Hodges',
      applicant2Name: 'Jose Griffin',
      status: 'offered',
    },
    {
      id: '2',
      uploadedDate: new Date().getTime(),
      documentType: 'proff of address',
      applicant1Name: 'Carlo Hodges',
      applicant2Name: 'Jose Griffin',
      status: 'offered',
    },
  ];

  return <DocumentTable documents={documents} />;
}

export default RecentDocuments;
