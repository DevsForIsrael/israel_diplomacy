import { ContentCreator, ContentType, defaultContent } from "./Content";
import { networkNames, Content } from "../types";

const API_TOKEN = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN;
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const API_URL = process.env.REACT_APP_CONTENTFUL_API_URL;
const EPI_ENV = process.env.REACT_APP_CONTENTFUL_API_ENV;
const ENTRY_ID = process.env.REACT_APP_CONTENTFUL_ENTRY_ID;

export class ContentfulCreator extends ContentCreator {
  public getContentProvider(): ContentType {
    return new ContentfulContent();
  }
}

class ContentfulContent implements ContentType {
  public async contentImplementation(): Promise<Content> {
    const response = await fetch(
      `${API_URL}/spaces/${SPACE_ID}/environments/${EPI_ENV}/entries/${ENTRY_ID}?access_token=${API_TOKEN}`
    );
    const parsedData = await response.json();
    const entries: Content = defaultContent;

    for (const key of networkNames) {
      entries[key] = parsedData.fields[key].sort(() => 0.5 - Math.random());
    }

    return entries;
  }
}
