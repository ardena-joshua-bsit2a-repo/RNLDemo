import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

type HeaderContextType = {
  isOpen: boolean;
  toggleUserMenu: () => void;
};

const Headercontext = createContext<HeaderContextType | undefined>(undefined);

export const useHeader = () => {
  const context = useContext(Headercontext);

  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }

  return context;
};

export const HeaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsOpen((prev) => !prev);
    // setIsOpen(!isOpen);
  };

  return (
    <Headercontext.Provider value={{ isOpen, toggleUserMenu }}>
      {children}
    </Headercontext.Provider>
  );
};
