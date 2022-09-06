import { useEffect, useState } from "react";

const useCollapseStatus = (collapseName: string) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const targetNode = document.getElementsByClassName(collapseName)[0];
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = (mutationList: MutationRecord[]) => {
      for (const mutation of mutationList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (targetNode.classList.contains("collapse-close")) {
            setIsOpen(false);
            return;
          }
          setIsOpen(true);
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, []);

  return { isOpen, setIsOpen };
};

export default useCollapseStatus;
