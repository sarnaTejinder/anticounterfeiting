export const ADMIN_LEVEL = 1;
export const MANAGER_LEVEL = 2;
export const SERVICE_AGENT_LEVEL = 3;
export const SELLER_LEVEL = 4;

export const USER_LEVELS = {
  ADMIN: ADMIN_LEVEL,
  MANAGER: MANAGER_LEVEL,
  SERVICE_AGENT: SERVICE_AGENT_LEVEL,
  SELLER: SELLER_LEVEL,
};

export const USER_LEVEL_INFO = {
  [ADMIN_LEVEL]: {
    label: "ADMIN",
    color: "#8338ec",
  },
  [MANAGER_LEVEL]: {
    label: "MANAGER",
    color: "#3a86ff",
  },
  [SERVICE_AGENT_LEVEL]: {
    label: "SERVICE WORKER",
    color: "#ffbe0b",
  },
  [SELLER_LEVEL]: {
    label: "SELLER",
    color: "#fb5607",
  },
};
