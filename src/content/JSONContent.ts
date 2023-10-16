import { ContentCreator, ContentType } from "./Content";
import posts from "../posts.json";

class JSONContent implements ContentType {
  public async contentImplementation(): Promise<string[]> {
    return posts;
  }
}

export class JSONCreator extends ContentCreator {
  public getContentProvider(): ContentType {
    return new JSONContent();
  }
}
