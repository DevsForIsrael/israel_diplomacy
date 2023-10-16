import { ContentCreator, ContentType } from "./Content";
import { NetworkName, Content } from "../types";
import posts from "../posts.json";

class JSONContent implements ContentType {
  public async contentImplementation(): Promise<Content> {
    for (let key of Object.keys(posts)) {
      posts[key as NetworkName] = posts[key as NetworkName].sort(
        () => 0.5 - Math.random()
      );
    }
    console.log(posts);
    return posts;
  }
}

export class JSONCreator extends ContentCreator {
  public getContentProvider(): ContentType {
    return new JSONContent();
  }
}
