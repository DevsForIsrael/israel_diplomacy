import { ContentType } from "./Content";
import { JSONCreator } from "./JSONContent";
import { ContentfulCreator } from "./ContentulContent";
import { ContentEntryType, ContentEntryTypeEnum, Content } from "../types";

export enum CONTENT_PROVIDER {
  JSON = "json",
  CONTENTFUL = "contentful",
}

export const getContent = async (
  contentEntryType: ContentEntryType = ContentEntryTypeEnum.POSTS
): Promise<Content> => {
  let contentProvider: ContentType;
  switch (process.env.REACT_APP_DEFAULT_CONTENT_PROVIDER) {
    case CONTENT_PROVIDER.JSON:
      contentProvider = new JSONCreator().getContentProvider();
      break;
    case CONTENT_PROVIDER.CONTENTFUL:
      contentProvider = new ContentfulCreator().getContentProvider();
      break;
    default:
      contentProvider = new JSONCreator().getContentProvider();
  }
  const content = await contentProvider.contentImplementation(contentEntryType);
  return content;
};
