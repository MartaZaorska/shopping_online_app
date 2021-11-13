import { useState, useEffect, useCallback } from 'react';

function useScroll(): number {
  const [page, setPage] = useState<number>(1);

  const paginationHandler = useCallback(() => {
    if(window.scrollY + window.innerHeight >= document.body.getBoundingClientRect().height - 100){
      setPage(page + 1);
    }
  }, [page]);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollBtn: HTMLButtonElement = document.querySelector(".scroll__button")!;
      if(scrollBtn) scrollBtn.style.transform = window.scrollY >= 240 ? 'translateX(0px)' : 'translateX(100px)'; 
      paginationHandler();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, [paginationHandler]);

  return page;
}

export default useScroll;