import { UrlWithStringQuery } from 'url';

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
