export const languages = [
  "JavaScript",
  "Rust",
  "Go",
  "TypeScript",
  "Python",
  "HTML",
  "Makefile",
  "CSS",
  "Dockerfile",
  "Shell",
  "Astro",
] as const;

export type Filter = { language: Set<(typeof languages)[number]> };

export interface Project {
  account: string;
  displayTitle: string;
  description: string;
  filterableMetadata: Filter;
  href: string;
  githubPayload: { [K in (typeof languages)[number]]?: number };
}
