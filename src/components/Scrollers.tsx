import { createSignal, onMount } from 'solid-js';

type ScrollersProps = {
  scrollDiv: HTMLDivElement | undefined;
};

export const Scrollers = (props: ScrollersProps) => {
  const { scrollDiv } = props;
  const [isScrollStart, setIsScrollStart] = createSignal(false);

  onMount(() => {
    if (!scrollDiv) return;

    setIsScrollStart(scrollDiv.scrollLeft === 0);

    scrollDiv?.addEventListener('scroll', () => {
      setIsScrollStart(scrollDiv.scrollLeft === 0);
    });
  });

  return (
    <div class="w-full h-max flex justify-center items-center gap-5">
      <button
        type="button"
        title="previous"
        aria-label="next carousel item"
        class="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isScrollStart()}
        onClick={() => scrollDiv?.scrollTo({ left: 0, behavior: 'smooth' })}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6l-.708.708Z"
          />
        </svg>
      </button>
      <button
        type="button"
        title="next"
        aria-label="next carousel item"
        class="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!isScrollStart()}
        onClick={() => scrollDiv?.scrollTo({ left: scrollDiv?.scrollWidth, behavior: 'smooth' })}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708l4.6-4.6Z"
          />
        </svg>
      </button>
    </div>
  );
};
