import { createContext, useCallback, useContext, useState } from "react";

const ContactVisibilityContext = createContext({
  isContactVisible: false,
  setContactVisibility: () => {},
});

export const ContactVisibilityProvider = ({
  children,
  initialIsContactVisible = false,
}) => {
  const [isContactVisible, setIsContactVisible] = useState(
    initialIsContactVisible
  );

  const set = useCallback((value) => setIsContactVisible(value), []);

  return (
    <ContactVisibilityContext.Provider
      value={{ isContactVisible, setContactVisibility: set }}
    >
      {children}
    </ContactVisibilityContext.Provider>
  );
};

export const useContactVisibility = () => useContext(ContactVisibilityContext);
