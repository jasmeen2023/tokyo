import { atom } from 'jotai';

import { AgentFieldStatus } from '@/models/agentStatus';

export interface Inventory {
  _id: string;
  category: string;
  name: string;
  status: AgentFieldStatus;
  avatar: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  attributes: number;
  subAttributes: number;
}

// Create your atoms and derivatives
export const updateInventoryAtom = atom<Inventory | undefined>(undefined);
export const openUpdateAtom = atom<boolean>(false);
