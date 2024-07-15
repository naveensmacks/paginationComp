import { useState } from "react";
import { DUMMY_DATA, ITEMS_PER_PAGE, PAGINATION_RANGE } from "../lib/Constants";
import PaginationControls from "./PaginationControls";

export default function ItemsList() {
  const items = DUMMY_DATA;
  const [currentPage, setCurrentPage] = useState(1);
  const slicedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return (
    <main className="flex flex-col items-center px-3 pt-3">
      <ul className="my-5 h-[563px] overflow-y-scroll">
        {slicedItems.map((item) => (
          <li
            key={item.id}
            className="border-b border-white/10 h-14 px-3 sm:px-9"
          >
            <div className="h-full m-auto ">
              <p className="text-white/55 text-4xl">
                {item.name} : {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <PaginationControls
        items={items}
        itemsPerPage={ITEMS_PER_PAGE}
        range={PAGINATION_RANGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}
