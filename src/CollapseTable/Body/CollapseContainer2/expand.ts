import { onAnimationFinish } from "./onAnimationFinish";

export const expand = ({
  detailElement,
  summaryRef,
  contentRef,
  isExpandingRef,
  isClosingRef,
  animationRef,
}: {
  detailElement: EventTarget & HTMLDetailsElement;
  summaryRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  isExpandingRef: React.MutableRefObject<boolean>;
  isClosingRef: React.MutableRefObject<boolean>;
  animationRef: React.MutableRefObject<Animation | null>;
}) => {
  if (summaryRef.current == null || contentRef.current == null) return;

  // Set the element as "being expanding"
  isExpandingRef.current = true;
  // Get the current fixed height of the element
  const startHeight = `${detailElement.offsetHeight}px`;
  // Calculate the open height of the element (summary height + content height)
  const endHeight = `${
    summaryRef.current.offsetHeight + contentRef.current.offsetHeight
  }px`;

  // Start an animation
  animationRef.current = detailElement.animate(
    {
      // Set the keyframes from the startHeight to endHeight
      height: [startHeight, endHeight],
    },
    {
      duration: 400,
      easing: "ease-out",
    }
  );
  // When the animation is complete, call onAnimationFinish()
  animationRef.current.onfinish = () =>
    onAnimationFinish({
      open: true,
      detailElement,
      animationRef,
      isClosingRef,
      isExpandingRef,
    });
  // If the animation is cancelled, isExpanding variable is set to false
  animationRef.current.oncancel = () => (isExpandingRef.current = false);
};
