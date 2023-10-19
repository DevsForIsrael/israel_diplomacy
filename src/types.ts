export enum NetworkNameEnum {
  REDDIT = "reddit",
  TWITTER = "twitter",
  TIKTOK = "tiktok",
  INSTAGRAM = "instagram",
  FACEBOOK = "facebook",
}

export type NetworkName =
  (typeof NetworkNameEnum)[keyof typeof NetworkNameEnum];

export interface Network {
  name: NetworkName;
  src: string;
  padding: number;
  display: string;
}

export interface NetworksEnum extends Array<Network> {}

export enum ContentEntryTypeEnum {
  POSTS = "posts",
  FACTS = "facts",
  PAGE_CONTENT = "pageContent",
}

export type ContentEntryType =
  (typeof ContentEntryTypeEnum)[keyof typeof ContentEntryTypeEnum];

export interface Posts {
  [NetworkNameEnum.REDDIT]?: string[];
  [NetworkNameEnum.TWITTER]?: string[];
  [NetworkNameEnum.TIKTOK]?: string[];
  [NetworkNameEnum.INSTAGRAM]?: string[];
  [NetworkNameEnum.FACEBOOK]?: string[];
}

export interface Facts {
  title: string;
  bulletsTitle: string;
  bullets: string[];
}

export interface FooterObject {
  content?: {
    content?: {
      value?: any;
      data?: {
        uri?: string;
      };
      content?: {
        value?: any;
      }[];
    }[];
  }[];
}
export interface PageContent {
  title: string;
  subTitle: string;
  buttonsTitle: string;
  footer: FooterObject;
}

export type Content = Posts | Facts | PageContent;

export const defaultFacts = {
  title: "",
  bulletsTitle: "",
  bullets: [],
};

export const defaultPageContent = {
  title: "",
  subTitle: "",
  buttonsTitle: "",
  footer: {},
};
