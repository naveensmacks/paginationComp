import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type NavigationButtonProps = {
  direction: "prev" | "next";
  showButton: boolean;
  onClickAction: () => void;
};
export default function NavigationButton({
  direction,
  showButton,
  onClickAction,
}: NavigationButtonProps) {
  return (
    <>
      {!showButton && <div className="w-20 h-10"></div>}
      {showButton && (
        <button
          className="w-20 h-10 flex items-center bg-white/25 rounded-md justify-center hover:bg-white/20"
          onClick={onClickAction}
        >
          {direction === "prev" && (
            <>
              <ArrowLeftIcon className="w-5 h-5" /> PREV
            </>
          )}
          {direction === "next" && (
            <>
              NEXT
              <ArrowRightIcon className="w-5 h-5" />
            </>
          )}
        </button>
      )}
    </>
  );
}
