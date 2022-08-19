import { onAnimationFinish } from "./onAnimationFinish";

export const close = ({
  detailElement,
  isClosingRef,
  summaryRef,
  animationRef,
  isExpandingRef,
}: {
  detailElement: EventTarget & HTMLDetailsElement;
  isClosingRef: React.MutableRefObject<boolean>;
  summaryRef: React.RefObject<HTMLElement>;
  animationRef: React.MutableRefObject<Animation | null>;
  isExpandingRef: React.MutableRefObject<boolean>;
}) => {
  // Set the element as "being closed"
  isClosingRef.current = true;

  // Store the current height of the element
  const startHeight = `${detailElement.offsetHeight}px`;
  // Calculate the height of the summary
  const endHeight = `${summaryRef.current?.offsetHeight}px`;

  // If there is already an animation running
  if (animationRef.current) {
    // Cancel the current animation
    animationRef.current.cancel();
  }

  // Start animation
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
      open: false,
      detailElement,
      animationRef,
      isClosingRef,
      isExpandingRef,
    });
  // If the animation is cancelled, isClosing variable is set to false
  animationRef.current.oncancel = () => (isClosingRef.current = false);
};
