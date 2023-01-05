import { atom } from 'jotai';

interface SidebarState {
  active: string;
}

// Create your atoms and derivatives
export const sidebarAtom = atom<SidebarState>({
  active: 'dashboard',
});

export const collapsedAtom = atom<boolean>(true);
