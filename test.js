const allRoles = {
  systemOwner: { initials: 'SO', rights: [] },
  superAdmin: { initials: 'SA', rights: [] },
  bookie: { initials: 'BO', rights: [] },
  agent: { initials: 'AG', rights: [] },
  subAgent: { initials: 'SAG', rights: [] },
  customer: { initials: 'CU', rights: [] },
};

export const roles = Object.keys(allRoles);

export const roleRights = new Map(Object.entries(allRoles));
