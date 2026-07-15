export function slugify(text) {
  if (!text) return "";

  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-zа-яё0-9\s-]/gi, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
