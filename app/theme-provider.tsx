//app/theme-provider.tsx
"use client";
import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  
  return (
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        {children}
      </ThemeContext.Provider>
  );
}