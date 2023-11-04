import { createSignal, For, onMount, Show } from 'solid-js';

type CarouselProps = {
  children: any;
  cssClass?: string;
};

const Carousel = (props: CarouselProps) => {
  const { children, cssClass = '' } = props;
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [items, setItems] = createSignal<Element[]>([]);
  const controlsHandlerClick = (index: number) => {
    setActiveIndex(index);
    ref?.scrollTo({
      left: index * (ref?.clientWidth ?? 0),
      behavior: 'smooth'
    });
  };
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    setItems(Array.from((children as HTMLElement).children ?? []));

    ref?.addEventListener('scroll', () => {
      const scrollLeft = ref?.scrollLeft ?? 0;
      const clientWidth = ref?.clientWidth ?? 0;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    });
  });

  return (
    <div
      classList={{
        'w-full max-w-full flex flex-col items-center overflow-x-hidden gap-3': true,
        [cssClass]: cssClass !== ''
      }}>
      <div
        ref={ref}
        class="inline-flex overflow-x-scroll snap-x snap-mandatory scroll-smooth hide-scrollbar gap-4">
        <For each={items()}>
          {(item, index) => (
            <div
              id={`carousel-item-${index()}`}
              class="flex-none w-full flex justify-center snap-start">
              {item}
            </div>
          )}
        </For>
      </div>
      <Show when={items().length > 1}>
        <div class="flex flex-nowrap gap-3">
          <button
            type="button"
            title="previous"
            aria-label="next carousel item"
            disabled={activeIndex() === 0}
            class="disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => controlsHandlerClick(activeIndex() - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6l-.708.708Z"
              />
            </svg>
          </button>
          <For each={items()}>
            {(_, index) => (
              <button
                id={`carousel-item-${index()}`}
                type="button"
                title={`item ${index() + 1}`}
                aria-label={`carousel item ${index() + 1}`}
                onClick={() => controlsHandlerClick(index())}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 48 48"
                  classList={{
                    'text-pink': activeIndex() === index()
                  }}>
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="4"
                    d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
                  />
                </svg>
              </button>
            )}
          </For>
          <button
            type="button"
            title="next"
            aria-label="next carousel item"
            disabled={activeIndex() === items().length - 1}
            class="disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => controlsHandlerClick(activeIndex() + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708l4.6-4.6Z"
              />
            </svg>
          </button>
        </div>
      </Show>
    </div>
  );
};

export default Carousel;
