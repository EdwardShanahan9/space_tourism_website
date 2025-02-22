import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarContextProvider = ({ children }) => {
  const [activeNavbar, setActiveNavbar] = useState(false);

  const handleNavbar = () => setActiveNavbar(!activeNavbar);

  return (
    <NavbarContext.Provider value={{ activeNavbar, handleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
