/**
 *
 * @param {string} txt - The input text to be slice
 * @param {number} [max=50] -  The maximum length before truncation
 * @returns The sliced text, weth an ellipsis (...) appended if trunced.
 */
export function textSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
