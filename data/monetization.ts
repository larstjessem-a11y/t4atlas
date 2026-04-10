export type HubMonetizationConfig = {
  ads: {
    top: boolean;
    middle: boolean;
    bottom: boolean;
    sidebar: boolean;
  };
  affiliate: {
    enabled: boolean;
  };
};

export const monetizationConfig: Record<string, HubMonetizationConfig> = {
  finance: {
    ads: {
      top: true,
      middle: true,
      bottom: true,
      sidebar: true,
    },
    affiliate: {
      enabled: false,
    },
  },
  development: {
    ads: {
      top: true,
      middle: true,
      bottom: true,
      sidebar: false,
    },
    affiliate: {
      enabled: false,
    },
  },
  converters: {
    ads: {
      top: true,
      middle: false,
      bottom: true,
      sidebar: false,
    },
    affiliate: {
      enabled: false,
    },
  },
};

export const defaultMonetizationConfig: HubMonetizationConfig = {
  ads: {
    top: true,
    middle: true,
    bottom: true,
    sidebar: false,
  },
  affiliate: {
    enabled: false,
  },
};