"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? (
        <Sun className="h-[1.4rem] w-[1.4rem]" />
      ) : (
        <Moon className="h-[1.4rem] w-[1.4rem]" />
      )}
    </Button>
  );
}
