import { cn } from "@/lib/utils";
import Image from "next/image";

interface SwipeCardsProps {
  className?: string;
}

const SwipeCards = ({ className }: SwipeCardsProps) => {
  return (
    <div
      className={cn(
        "relative h-[250px] w-[180px] sm:h-[280px] sm:w-[200px]",
        className,
      )}
    >
      <Image
        src="/img/abhi.jpg"
        alt="Abhishek"
        fill
        sizes="(max-width: 640px) 180px, 200px"
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        className="rounded-lg object-cover shadow-lg transition-opacity duration-300"
      />
    </div>
  );
};

export default SwipeCards;
