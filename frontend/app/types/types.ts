export const languages = ["Javascript", "Rust", "Go", "Typescript", "Python"] as const;

// export type Filter = {
//   language: Set<typeof languages[number]>;
// }

export type Filter = { language: Set<typeof languages[number]> };

export interface Project {
  displayTitle: string; 
  description: string;
  filterableMetadata: Filter;
  href: string;
  githubPayload: {[K in typeof languages[number]]?: number};
}