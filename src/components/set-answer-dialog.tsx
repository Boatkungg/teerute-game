import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function SetAnswerDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [answer, setAnswer] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-96">
        <DialogHeader>
          <DialogTitle>Set new answer</DialogTitle>
          <DialogDescription>Type a new answer with 4 digits</DialogDescription>
        </DialogHeader>
        <Input
          type="text"
          maxLength={4}
          placeholder="0000"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                window.sessionStorage.setItem("answer", answer);
              }}
            >
              Set answer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
