import { createContext } from "react";

export const StickyStatusContext = createContext({
  isHeaderSticky: false,
  isFirstColumnSticky: false,
});

export const StickyStatusContextProvider = StickyStatusContext.Provider;
