export const networkNames = [
  "reddit",
  "twitter",
  "tiktok",
  "instagram",
] as const;
export type NetworkName = (typeof networkNames)[number];

export interface Network {
  name: NetworkName;
  src: string;
  padding: number;
  display: string;
}

export interface EnumNetworks extends Array<Network> {}
