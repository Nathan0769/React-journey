"use client";
import { REACT_CARDS } from "./React-cards";
import { Button, buttonVariants } from "./Button";
import { ReactSvg } from "./ReactSvg";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BookOpenText, PlusCircle } from "lucide-react";
import { Suspense } from "react";

export const Card = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  return (
    <>
      {REACT_CARDS.filter(
        (card) => card.category === filter || filter === "all"
      ).map((card) => {
        return (
          <div
            key={card.name}
            className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            {/* Header */}
            <div className="flex w-full items-center gap-2">
              <ReactSvg size={24} />
              <h1 className="text-lg font-bold">React</h1>
            </div>

            {/* Card title */}
            <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold">
              {card.name}
            </p>

            {/* Footer: category + buttons */}
            <div className="flex w-full items-center gap-2">
              {filter === "all" ? (
                <p className="text-xs text-gray-400">{card.category}</p>
              ) : (
                <div />
              )}

              <Link
                href={card.url}
                className={buttonVariants({
                  variant: "secondary",
                  className: "ml-auto",
                })}
              >
                <BookOpenText size={16} />
              </Link>

              <Button variant="secondary">
                <PlusCircle size={16} />
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const CardList = () => {
  return (
    <div className="size-full overflow-auto">
      <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<div>Loading...</div>}>
          <Card />
        </Suspense>
      </div>
    </div>
  );
};

export default CardList;
