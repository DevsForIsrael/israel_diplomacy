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

/**

function clientCode(creator: ContentCreator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.getContent());
}

console.log("App: Launched with the JSONCreator.");
clientCode(new JSONCreator());
console.log("");

console.log("App: Launched with the ContentfulCreator.");
clientCode(new ContentfulCreator());
*/
