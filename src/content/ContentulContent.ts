import { ContentCreator, ContentType } from "./Content";

class ContentfulCreator extends ContentCreator {
  public getContentProvider(): ContentType {
    return new ContentfulContent();
  }
}

class ContentfulContent implements ContentType {
  public async contentImplementation(): Promise<string[]> {
    return ["{Result of the ContentfulContent}"];
  }
}
