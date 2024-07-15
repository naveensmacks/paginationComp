type PageButtonProps = {
  pageNumber: number;
  currentPage: number;
  onClickAction: () => void;
};

export default function PageButton({
  pageNumber,
  currentPage,
  onClickAction,
}: PageButtonProps) {
  return (
    <button
      key={pageNumber}
      className={`w-10 h-10 bg-white/25 rounded-md justify-center hover:bg-white/20 ${
        currentPage === pageNumber ? "bg-accent/80" : ""
      }`}
      onClick={onClickAction}
    >
      {pageNumber}
    </button>
  );
}
