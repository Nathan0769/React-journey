"use client";
import { REACT_CARDS } from "./React-cards";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

const CategoriesMenu = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const categories = [...new Set(REACT_CARDS.map((card) => card.category))];
  categories.unshift("all");

  return (
    <Fragment>
      {categories.map((category) => {
        const isActive =
          category === filter || (filter === null && category === "all");
        const className = isActive
          ? "bg-gray-300 font-bold rounded-md px-2 py-1 capitalize transition-colors"
          : "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200";

        return (
          <Link
            key={category}
            href={`/?filter=${category}`}
            className={className}
          >
            {category}
          </Link>
        );
      })}
    </Fragment>
  );
};

export const Menu = () => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <CategoriesMenu />
    </nav>
  );
};

export default Menu;
