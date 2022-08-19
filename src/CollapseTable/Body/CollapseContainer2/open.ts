import { expand } from "./expand";

export const open = ({
  detailElement,
  summaryRef,
  contentRef,
  isClosingRef,
  isExpandingRef,
  animationRef,
}: {
  detailElement: EventTarget & HTMLDetailsElement;
  summaryRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  isClosingRef: React.MutableRefObject<boolean>;
  isExpandingRef: React.MutableRefObject<boolean>;
  animationRef: React.MutableRefObject<Animation | null>;
}) => {
  // Apply a fixed height on the element
  detailElement.style.height = `${detailElement.offsetHeight}px`;
  // Force the [open] attribute on the details element
  detailElement.open = true;

  // Wait for the next frame to call the expand function
  window.requestAnimationFrame(() => {
    expand({
      detailElement,
      summaryRef,
      contentRef,
      isClosingRef,
      isExpandingRef,
      animationRef,
    });
  });
};
