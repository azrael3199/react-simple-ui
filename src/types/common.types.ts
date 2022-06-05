import { UrlWithStringQuery } from 'url';

export interface IStylingProperties {
  [key: string]: string;
}

export interface IFontProperties {
  fontFamily: string | UrlWithStringQuery;
}

export interface IThemeProperties {
  primaryColor: string;
  accentColor: string;
  secondaryColor?: string;
  bgColor: string;
  fonts: IFontProperties;
}
