const IMG_URL_REGEXP = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;

export function checkImageUrlisValid(url?: string): boolean {
  return Boolean(url && IMG_URL_REGEXP.test(url));
}
