export interface Picture {
  id: string;
  url: string;
}

export interface TranslationProperties {
  certificate_1: string;
  certificate_2: string;
  seo_claim: string;
  number: string;
  material: string;
  color: string;
  size: string;
  weight: string;
  amount: string;
}

export interface Translation {
  name: string;
  description: string;
  locale: string;
  shortname: string;
  properties: TranslationProperties;
}

export interface Product {
  pictures: Picture[];
  previous: string;
  oldId: number;
  rating: number;
  createdAt: number;
  funeralType: string[];
  updatedAt: number;
  category: string;
  funeralPlan: string[];
  price: number;
  id: string;
  translations: Translation;
}
