export type TaskStatus = 'completed' | 'inprogress' | 'pending';

export interface Task {
  id: string;
  dueDate: number;
  caseId: string;
  assignedBy: string;
  name: string;
  status: TaskStatus;
}
