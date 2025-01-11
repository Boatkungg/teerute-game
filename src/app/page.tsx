"use client";

import NumberDisplay from "@/components/number-display";
import NumberFooter from "@/components/number-footer";
import NumberPad from "@/components/number-pad";
import ResetFooter from "@/components/reset-footer";
import ThemeButton from "@/components/theme-button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [numbers, setNumbers] = useState<string>("????");
  const [win, setWin] = useState<boolean>(false);

  useEffect(() => {
    if (!window.sessionStorage.getItem("answer")) {
      window.sessionStorage.setItem("answer", "0000");
    }
  }, []);

  const handleClear = () => {
    setNumbers("????");
  };

  const handleEnter = () => {
    if (numbers.includes("?")) {
      return;
    }
    if (numbers === "XXXX") {
      return;
    }
    if (numbers === window.sessionStorage.getItem("answer")) {
      setNumbers("✅✅✅✅");
      setWin(true);
    } else {
      setNumbers("XXXX");
      setTimeout(() => {
        setNumbers("????");
      }, 1000);
    }
  };

  const handleReset = () => {
    setNumbers("????");
    setWin(false);
  };

  return (
    <main className="flex flex-col w-dvw h-dvh">
      <div className="flex h-12 w-full items-center">
        <SidebarTrigger className="w-10 h-10" />
        <ThemeButton />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <NumberDisplay values={numbers} />
        <NumberPad onNumberClick={setNumbers} />
        {!win ? (
          <NumberFooter onClear={handleClear} onEnter={handleEnter} />
        ) : (
          <ResetFooter onRestart={handleReset} />
        )}
      </div>
    </main>
  );
}
