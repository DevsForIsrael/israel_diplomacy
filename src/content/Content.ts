import { networkNames, NetworkName } from "../types";

export abstract class ContentCreator {
  public abstract getContentProvider(): ContentType;

  private posts: Record<NetworkName, string[]> = {
    reddit: [],
    twitter: [],
    tiktok: [],
    instagram: [],
  };
  // TODO: Fix this type into a prefilled object with the networkNames as keys
  private fetched: boolean = false;

  public async getContent(): Promise<Record<NetworkName, string[]>> {
    if (!this.fetched) {
      const provider: ContentType = this.getContentProvider();
      this.posts = await provider.contentImplementation();
      this.fetched = true;
    }
    return this.posts;
  }
}

export interface ContentType {
  contentImplementation(): Promise<Record<NetworkName, string[]>>;
}
