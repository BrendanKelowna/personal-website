//* Types
export type ArticleType =
  | "about"
  | "contact"
  | "objective"
  | "employment"
  | "education"
  | "training"
  | "skills"
  | "programing"
  | "projects";

//bits
export type LinkObj = { name: string; href: string; newPage?: boolean };
export type PhotoObj = { title: string; href: string; details?: string };

export interface DBArticle {
  title: string;
  subheader?: string;
  details?: string[] | string;
  links?: LinkObj[];
  order?: number;
}
export interface DBAboutArticle extends DBArticle {
  photos: PhotoObj[];
}
export interface DBProjectArticle extends DBArticle {
  photoSize: { x: number; y: number };
  photos: PhotoObj[];
}
export interface DBEmploymentArticle extends DBArticle {
  positions: DBArticle[];
}

export interface Article extends DBArticle {
  id: string;
}
export interface AboutArticle extends DBAboutArticle {
  id: string;
}
export interface ProjectArticle extends DBProjectArticle {
  id: string;
}
export interface EmploymentArticle extends DBEmploymentArticle {
  id: string;
}
