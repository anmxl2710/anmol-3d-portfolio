/** Resolves paths for files in `/public` (works with GitHub Pages subpath). */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, "");
  const base = import.meta.env.BASE_URL;
  return `${base}${normalized}`;
}
