import * as React from "react";

import { NumberButton } from "@/components/custom/number-button";

interface NumberPadProps {
  onNumberClick: React.Dispatch<React.SetStateAction<string>>;
}

export default function NumberPad({ onNumberClick }: NumberPadProps) {
  const handleNumberClick = (value: string) => {
    onNumberClick((prev) => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] === "?") {
          return prev.slice(0, i) + value + prev.slice(i + 1);
        }
      }
      return prev;
    });
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-6 w-auto mt-10">
      {numbers.map((number) => (
        <NumberButton
          key={number}
          onClick={() => handleNumberClick(number.toString())}
          className={number === 0 ? "col-span-3" : ""}
        >
          <span className="text-sm md:text-[2vw] font-bold leading-none">
            {number}
          </span>
        </NumberButton>
      ))}
    </div>
  );
}
