import { Button } from "./ui/button";

interface NumberFooterProps {
  onClear: () => void;
  onEnter: () => void;
}

export default function NumberFooter({ onClear, onEnter }: NumberFooterProps) {
  return (
    <div className=" flex items-center justify-around w-full h-12 mt-10">
      <Button size="round" variant="outline" onClick={onClear}>
        <span className="text-sm md:text-[2vw]">CLEAR</span>
      </Button>
      <Button size="round" variant="outline" onClick={onEnter}>
        <span className="text-sm md:text-[2vw]">ENTER</span>
      </Button>
    </div>
  );
}
