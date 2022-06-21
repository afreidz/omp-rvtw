import { createContext, useState } from "react";

interface IDarkModeContext {
  enabled: boolean;
  toggle?: () => void;
}

export const DarkModeContext = createContext<IDarkModeContext>({
  enabled: false,
});

export default function DarkModeProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [enabled, setEnabled] = useState(false);

  function toggle() {
    setEnabled(!enabled);
  }

  return (
    <DarkModeContext.Provider value={{ enabled, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}