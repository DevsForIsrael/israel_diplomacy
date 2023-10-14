const networkNames = ["reddit", "twitter", "tiktok", "instagram"] as const;
export type networkName = (typeof networkNames)[number];

export interface Network {
  name: networkName;
  src: string;
  padding: number;
  display: string;
}

export interface EnumNetworks extends Array<Network> {}
