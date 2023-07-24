export const languages = ["JavaScript", "Rust", "Go", "TypeScript", "Python", "HTML", "Vue", "Makefile", "CSS", "Dockerfile", "Shell", "Starlark"] as const;

export type Filter = { language: Set<typeof languages[number]> };

export interface Project {
  account: string;
  displayTitle: string; 
  description: string;
  filterableMetadata: Filter;
  href: string;
  githubPayload: {[K in typeof languages[number]]?: number};
}