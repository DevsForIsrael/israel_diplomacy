import { ContentCreator, ContentType } from "./Content";

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
  public async contentImplementation(): Promise<Record<NetworkName, string[]>> {
    const response = await fetch(
      `${API_URL}/spaces/${SPACE_ID}/environments/${EPI_ENV}/entries/${ENTRY_ID}?access_token=${API_TOKEN}`
    );
    const data = await response.json();
    const entries = Object.keys(data.fields)
      .reduce((acc, field) => acc.concat(data.fields[field]), [] as string[])
      .filter((entry) => entry.indexOf("http") > -1);
    // TODO: fix this and shuffle the entries
    return entries;
  }
}
