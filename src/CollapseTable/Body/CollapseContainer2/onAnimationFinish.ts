export const onAnimationFinish = ({
  open,
  detailElement,
  animationRef,
  isClosingRef,
  isExpandingRef,
}: {
  open: boolean;
  detailElement: EventTarget & HTMLDetailsElement;
  animationRef: React.MutableRefObject<Animation | null>;
  isClosingRef: React.MutableRefObject<boolean>;
  isExpandingRef: React.MutableRefObject<boolean>;
}) => {
  // Set the open attribute based on the parameter
  detailElement.open = open;
  // Clear the stored animation
  animationRef.current = null;
  // Reset isClosing & isExpanding
  isClosingRef.current = false;
  isExpandingRef.current = false;
  // Remove the overflow hidden and the fixed height
  detailElement.style.height = detailElement.style.overflow = "";
};
