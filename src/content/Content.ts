import {
  NetworkNameEnum,
  ContentEntryTypeEnum,
  Content,
  Posts,
  Facts,
  PageContent,
  ContentEntryType,
  defaultFacts,
  defaultPageContent,
} from "../types";

export const defaultPosts: Posts = Object.values(NetworkNameEnum).reduce(
  (acc, networkName) => ({ ...acc, [networkName]: [] }),
  {} as Posts
);

export abstract class ContentCreator {
  public abstract getContentProvider(): ContentType;

  private posts: Posts = Object.values(NetworkNameEnum).reduce(
    (acc, networkName) => ({ ...acc, [networkName]: [] }),
    {} as Posts
  );

  private facts: Facts = defaultFacts;
  private pageContent: PageContent = defaultPageContent;

  private fetchedPosts: boolean = false;
  private fetchedFacts: boolean = false;
  private fetchedPageContent: boolean = false;

  public async getContent(
    contentEntryType: ContentEntryType
  ): Promise<Content> {
    const provider: ContentType = this.getContentProvider();

    switch (contentEntryType) {
      case ContentEntryTypeEnum.POSTS:
        if (!this.fetchedPosts) {
          this.posts = (await provider.contentImplementation(
            contentEntryType
          )) as Posts;
          this.fetchedPosts = true;
        }
        return this.posts as Content;
      case ContentEntryTypeEnum.FACTS:
        if (!this.fetchedFacts) {
          this.facts = (await provider.contentImplementation(
            contentEntryType
          )) as Facts;
          this.fetchedFacts = true;
        }
        return this.facts as Content;
      case ContentEntryTypeEnum.PAGE_CONTENT:
        if (!this.fetchedFacts) {
          this.pageContent = (await provider.contentImplementation(
            contentEntryType
          )) as PageContent;
          this.fetchedPageContent = true;
        }
        return this.pageContent as Content;
    }
  }
}

export interface ContentType {
  contentImplementation(contentEntryType: ContentEntryType): Promise<Content>;
}
