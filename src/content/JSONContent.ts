import { ContentCreator, ContentType } from "./Content";
import { NetworkName } from "../types";
import posts from "../posts.json";

class JSONContent implements ContentType {
  public async contentImplementation(): Promise<Record<NetworkName, string[]>> {
    // TODO: fix this and shuffle the entries
    return posts;
  }
}

export class JSONCreator extends ContentCreator {
  public getContentProvider(): ContentType {
    return new JSONContent();
  }
}
