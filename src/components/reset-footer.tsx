import { Button } from "@/components/ui/button";

interface ResetFooterProps {
  onRestart: () => void;
}

export default function ResetFooter({ onRestart }: ResetFooterProps) {
  return (
    <div className=" flex items-center justify-center w-full h-12 mt-10">
      <Button size="round" variant="outline" onClick={onRestart}>
        <span className="text-sm md:text-[2vw]">RESTART</span>
      </Button>
    </div>
  );
}
