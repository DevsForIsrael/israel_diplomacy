export abstract class ContentCreator {
  public abstract getContentProvider(): ContentType;

  private posts: string[] = [];

  public async getContent(): Promise<string[]> {
    if (this.posts.length === 0) {
      const provider: ContentType = this.getContentProvider();
      const content = await provider.contentImplementation();
      const shuffledPosts: string[] = content.sort(() => 0.5 - Math.random());
      this.posts = shuffledPosts.reverse();
    }
    return this.posts;
  }
}

export interface ContentType {
  contentImplementation(): Promise<string[]>;
}
