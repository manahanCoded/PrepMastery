import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: String;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "h-full w-full max-w-screen-2xl px-2.5 md:px-8 mx-auto",
        className
      )}
    > 
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
