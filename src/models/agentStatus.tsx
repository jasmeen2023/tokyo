export type AgentFieldStatus = 'active' | 'inActive';

export interface AgentStatus {
  id: string;
  status: AgentFieldStatus;
}
