import { ContentCreator, ContentType, defaultPosts } from "./Content";
import {
  NetworkNameEnum,
  Content,
  Posts,
  Facts,
  PageContent,
  ContentEntryTypeEnum,
  ContentEntryType,
} from "../types";

const API_TOKEN = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN;
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const API_URL = process.env.REACT_APP_CONTENTFUL_API_URL;
const EPI_ENV = process.env.REACT_APP_CONTENTFUL_API_ENV;

const ENTRY_IDS = {
  POSTS: "498date6pFpPEoRt5jdGa3",
  FACTS: "1phCBh6gSgmSztDczRRAzt",
  PAGE_CONTENT: "4wnchcPiKr2x8rPGPgsyS1",
};

export class ContentfulCreator extends ContentCreator {
  public getContentProvider(): ContentType {
    return new ContentfulContent();
  }
}

class ContentfulContent implements ContentType {
  public async contentImplementation(
    contentEntryType: ContentEntryType
  ): Promise<Content> {
    switch (contentEntryType) {
      case ContentEntryTypeEnum.POSTS:
        return await this.parsePosts();
      case ContentEntryTypeEnum.FACTS:
        return await this.parseFacts();
      case ContentEntryTypeEnum.PAGE_CONTENT:
        return await this.parsePageContent();
    }
  }

  private composeUrl(contentEntryType: string): string {
    return `${API_URL}/spaces/${SPACE_ID}/environments/${EPI_ENV}/entries/${contentEntryType}?access_token=${API_TOKEN}`;
  }

  private async parsePosts(): Promise<Posts> {
    const response = await fetch(this.composeUrl(ENTRY_IDS.POSTS));
    const parsedData = await response.json();

    const entries: Posts = defaultPosts;

    for (const key of Object.values(NetworkNameEnum)) {
      entries[key] = parsedData.fields[key]?.sort(() => 0.5 - Math.random());
    }

    return entries as Promise<Posts>;
  }

  private async parseFacts(): Promise<Facts> {
    const response = await fetch(this.composeUrl(ENTRY_IDS.FACTS));
    const parsedData = await response.json();
    return parsedData.fields as Promise<Facts>;
  }

  private async parsePageContent(): Promise<PageContent> {
    const response = await fetch(this.composeUrl(ENTRY_IDS.PAGE_CONTENT));
    const parsedData = await response.json();
    return parsedData.fields as Promise<PageContent>;
  }
}
