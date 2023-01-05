import { Task } from '@/models/task';

import TasksTable from './TasksTable';

function RecentOrders() {
  const tasks: Task[] = [
    {
      id: '1',
      dueDate: new Date().getTime(),
      caseId: 'ID987145',
      assignedBy: 'Chad Hodges',
      name: 'Jose Griffin',
      status: 'completed',
    },
    {
      id: '1',
      dueDate: new Date().getTime(),
      caseId: 'ID987145',
      assignedBy: 'Chad Hodges',
      name: 'Jose Griffin',
      status: 'pending',
    },
    {
      id: '1',
      dueDate: new Date().getTime(),
      caseId: 'ID987145',
      assignedBy: 'Chad Hodges',
      name: 'Jose Griffin',
      status: 'inprogress',
    },
  ];

  return <TasksTable tasks={tasks} />;
}

export default RecentOrders;
