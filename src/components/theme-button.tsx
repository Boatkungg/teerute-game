import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ThemeButton() {
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        setIsDark(!isDark);
      }}
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
}
