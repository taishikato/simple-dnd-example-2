export const rowLabelWidth = 180;
export const numberOfCols = 30;
export const numberOfRows = 300;

export const cols = Array.from({ length: numberOfCols }, (_, i) => ({
  text: `col ${i + 1}`,
  width: 100, // i % 2 === 0 ? 300 : 150,
}));

export const rows = Array.from({ length: numberOfRows }, (_, i) => ({
  text: `row ${i + 1}`,
  height: i % 5 === 0 ? 30 : 100,
}));

export const totalColLabelsWidth = cols.reduce((a, b) => a + b.width, 0);
export const baseZIndex = 1;
export const containerWidth = 600;
export const containerHeight = 600;

export const collapseClassPrefix = "collapse-";

export const collapseCloseClass = "collapse-close";

export const widthToAdd = 220; // px
