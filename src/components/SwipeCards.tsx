import { cn } from "@/lib/utils";
import Image from "next/image";

interface SwipeCardsProps {
  className?: string;
}

const SwipeCards = ({ className }: SwipeCardsProps) => {
  return (
    <div className={cn("h-[233px] w-[175px]", className)}>
      <Image
        src="/img/abhi.jpg"
        alt="Abhishek"
        width={175}
        height={233}
        priority
        className="h-full w-full rounded-lg object-cover shadow-lg"
      />
    </div>
  );
};

export default SwipeCards;
