import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { useGetMyUser } from '@/hooks/user/useUser';

import { userAtom } from '@/store/user';

import routesRequireAuth from '@/utils/routesRequireAuth.json';

export type AllowedRole = 'superadmin' | 'admin';
export interface MenuType {
  path: string;
  title: string;
  access: AllowedRole;
}

type SidebarContext = {
  sidebarToggle: any;
  getMenu: () => MenuType[];
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

type Props = {
  children: ReactNode;
};

export function SidebarProvider({ children }: Props) {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [sideContent, setSideContent] = useState<any>([
    {
      path: '/',
      title: 'Dashboard',
      access: ['superadmin', 'admin'],
    },
    ...routesRequireAuth,
  ]);
  const [user, setUser] = useAtom(userAtom);

  // console.log(sideContent);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  const getMenu = (): MenuType[] => {
    if (user) {
      return sideContent.filter((route) =>
        route.access.includes(user?.role)
      ) as unknown as MenuType[];
    }
    return sideContent.filter((route) =>
      route.access.includes('admin')
    ) as unknown as MenuType[];
  };

  const getMyUserHook = useGetMyUser();

  const getMyUserData = async () => {
    setUser({
      _id: 'sdasdasd23ken23jknk2n',
      role: 'superadmin',
      isVerified: false,
      type: 'staff',
      name: 'Navtej Singh GilL',
      createdAt: dayjs('1670530604195').toDate(),
      updatedAt: dayjs('1670530604383').toDate(),
      __v: 0,
      primaryEmail: '6392462cca6a6328ef1f8025',
    });
    const res: any = await getMyUserHook.mutateAsync();
    if (res?.status === 'success') {
      setUser(res?.user);
    }
  };

  useEffect(() => {
    getMyUserData();
  }, []);

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, getMenu, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
