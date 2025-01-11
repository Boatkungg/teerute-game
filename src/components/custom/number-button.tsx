import * as React from "react";

import { cn } from "@/lib/utils";

const NumberButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, type, ...props }, ref) => {
  return (
    <button
      type={type}
      className={cn(
        "border-[3px] border-input rounded-full w-[10vw] h-[10vw] max-w-[10vh] max-h-[10vh] justify-self-center flex items-center justify-center",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NumberButton.displayName = "NumberButton";

export { NumberButton };
