import { useEffect, useState } from "react";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="custom-border-gray fixed bottom-6 right-6 z-50 flex h-12  w-12 cursor-pointer items-center justify-center rounded-xl bg-customDarkBg2 transition hover:bg-customDarkBg3"
          onClick={scrollToTop}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
          >
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="rgb(99, 102, 241)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};
