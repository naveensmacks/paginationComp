import { DUMMY_DATA_TYPE } from "../lib/types";
import NavigationButton from "./NavigationButton";
import PageButton from "./PageButton";

type PaginationControlsProps<T> = {
  items: T[];
  itemsPerPage: number;
  range: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const getPaginationRange = (
  numberOfPages: number,
  range: number,
  currentPage: number
) => {
  const rangeMedian = Math.floor(range / 2);
  let before: boolean = false;
  let after: boolean = false;
  let paginationRange: number[] = [];
  if (currentPage - rangeMedian <= 2) {
    paginationRange = Array.from({ length: range - 1 }, (_, i) => 2 + i);
    after = true;
  } else if (
    currentPage - rangeMedian > 2 &&
    currentPage + rangeMedian < numberOfPages - 1
  ) {
    const rangeStart = currentPage - rangeMedian;
    paginationRange = Array.from({ length: range }, (_, i) => rangeStart + i);
    before = true;
    after = true;
  } else {
    before = true;
    paginationRange = Array.from(
      { length: range - 1 },
      (_, i) => numberOfPages - range + 1 + i
    );
  }

  return [before, after, paginationRange] as const;
};

export default function PaginationControls({
  items,
  itemsPerPage,
  range,
  currentPage,
  setCurrentPage,
}: PaginationControlsProps<DUMMY_DATA_TYPE>) {
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const [before, after, paginationRange] = getPaginationRange(
    numberOfPages,
    range,
    currentPage
  );
  console.log("paginationRange: ", paginationRange);
  return (
    <div className="flex items-center justify-between gap-x-1">
      <NavigationButton
        direction="prev"
        showButton={currentPage !== 1}
        onClickAction={() => setCurrentPage((prev) => prev - 1)}
      />
      <PageButton
        pageNumber={1}
        currentPage={currentPage}
        onClickAction={() => setCurrentPage(1)}
      />

      {before && <Dot />}

      {paginationRange.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          pageNumber={pageNumber}
          currentPage={currentPage}
          onClickAction={() => setCurrentPage(pageNumber)}
        />
      ))}
      {after && <Dot />}

      <PageButton
        pageNumber={numberOfPages}
        currentPage={currentPage}
        onClickAction={() => setCurrentPage(numberOfPages)}
      />
      <NavigationButton
        direction="next"
        showButton={currentPage !== numberOfPages}
        onClickAction={() => setCurrentPage((prev) => prev + 1)}
      />
    </div>
  );
}

function Dot() {
  return (
    <div className="w-10 h-10 rounded-md flex justify-center items-center">
      ...
    </div>
  );
}
