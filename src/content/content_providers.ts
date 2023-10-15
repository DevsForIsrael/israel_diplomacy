import "dotenv/config";

import { ContentType } from "./Content";
import { JSONCreator } from "./JSONContent";

export enum CONTENT_PROVIDER {
  JSON = "json",
  CONTENTFUL = "contentful",
}

export const getContent = (): Promise<string[]> => {
  console.log("********* " + process.env.DEFAULT_CONTENT_PROVIDER);
  let contentProvider: ContentType;
  switch (process.env.DEFAULT_CONTENT_PROVIDER) {
    case CONTENT_PROVIDER.JSON:
      contentProvider = new JSONCreator().getContentProvider();
      break;
    case CONTENT_PROVIDER.CONTENTFUL:
      contentProvider = new JSONCreator().getContentProvider();
      break;
    default:
      contentProvider = new JSONCreator().getContentProvider();
  }
  const content = contentProvider.contentImplementation();
  return content;
};
