export const rowLabelWidth = 180;
export const numberOfCols = 30;

export const cols = Array.from({ length: numberOfCols }, (_, i) => ({
  text: `col ${i + 1}`,
  width: 100, // i % 2 === 0 ? 300 : 150,
}));

export const totalColLabelsWidth = cols.reduce((a, b) => a + b.width, 0);
export const baseZIndex = 1;

export const collapseClassPrefix = "collapse-";

export const collapseCloseClass = "collapse-close";

export const heightForOneLine = 50;
