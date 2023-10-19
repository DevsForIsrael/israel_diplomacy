import { ContentCreator, ContentType } from "./Content";
import {
  NetworkName,
  Content,
  ContentEntryTypeEnum,
  Posts,
  Facts,
} from "../types";
import posts from "./posts.json";
import facts from "./facts.json";

class JSONContent implements ContentType {
  public async contentImplementation(
    contentEntryType: ContentEntryTypeEnum
  ): Promise<Content> {
    switch (contentEntryType) {
      case ContentEntryTypeEnum.POSTS:
        return this.parsePosts();
      case ContentEntryTypeEnum.FACTS:
        return this.parseFacts();
    }
    return {};
  }

  private parsePosts(): Posts {
    const narrowedPosts = posts as { [key in NetworkName]: string[] };

    for (let key of Object.keys(posts) as NetworkName[]) {
      narrowedPosts[key] = narrowedPosts[key]?.sort(() => 0.5 - Math.random());
    }

    return posts;
  }

  private parseFacts(): Facts {
    return facts;
  }
}

export class JSONCreator extends ContentCreator {
  public getContentProvider(): ContentType {
    return new JSONContent();
  }
}
