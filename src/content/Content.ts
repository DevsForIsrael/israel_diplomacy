import { networkNames, Content } from "../types";

export const defaultContent: Content = networkNames.reduce(
  (acc, networkName) => ({ ...acc, [networkName]: [] }),
  {} as Content
);

export abstract class ContentCreator {
  public abstract getContentProvider(): ContentType;

  private posts: Content = networkNames.reduce(
    (acc, networkName) => ({ ...acc, [networkName]: [] }),
    {} as Content
  );

  private fetched: boolean = false;

  public async getContent(): Promise<Content> {
    if (!this.fetched) {
      const provider: ContentType = this.getContentProvider();
      this.posts = await provider.contentImplementation();
      this.fetched = true;
    }
    return this.posts;
  }
}

export interface ContentType {
  contentImplementation(): Promise<Content>;
}
