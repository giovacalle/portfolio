import type { CollectionEntry } from 'astro:content';
import { onMount } from 'solid-js';
import anime from 'animejs';
import { Scrollers } from './Scrollers';

type TimelineProps = {
  timeline: CollectionEntry<'timeline'>[];
};

export const Timeline = (props: TimelineProps) => {
  const { timeline } = props;
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    if (!ref) return;

    anime({
      targets: ref,
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInQuart',
      translateX: ['-100%', '0%'],
      complete: () => {
        ref!.scrollTo({ left: ref!.scrollWidth, behavior: 'smooth' });
      }
    });
  });

  return (
    <>
      <div class="w-full overflow-auto hide-scrollbar opacity-0" ref={ref}>
        <div class="relative w-max inline-flex gap-10 py-28 px-5">
          <div class="absolute left-0 w-full border-t border-neutral-200"></div>
          {timeline.map(year => (
            <div class="-mt-11 flex flex-col items-center gap-2">
              <span>{year.data.title}</span>
              <div class="relative w-5 h-5 flex flex-col items-center bg-neutral-500 rounded-full">
                {year.data.nodes?.map((node, index) => {
                  const isUp = index === 1;
                  return (
                    <div
                      classList={{
                        'flex gap-2': true,
                        ['absolute -bottom-1 -left-1']: isUp,
                        ['absolute -top-1 -left-1 items-end']: !isUp
                      }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="150"
                        viewBox="0 0 15 15"
                        class="text-neutral-400">
                        <rect x="0" y="0" width="15" height="15" fill="none" stroke="none" />
                        {isUp && (
                          <g transform="translate(15 0) scale(-1 1)">
                            <path
                              fill="none"
                              stroke="currentColor"
                              d="M2.5 1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 0h2a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h2m0 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
                            />
                          </g>
                        )}
                        {!isUp && (
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M2.5 1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 0h2a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3h2m0 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
                          />
                        )}
                      </svg>
                      <div class="w-max h-max flex flex-col flex-nowrap gap-1">
                        <span>{node.title}</span>
                        <time class="text-xs font-normal text-neutral-400">
                          {node.fromYear} - {node.toYear ?? 'Present'}
                        </time>
                      </div>
                    </div>
                  );
                })}
              </div>
              <time class="mb-1 text-sm font-normal leading-none text-neutral-400">
                {year.slug}
              </time>
            </div>
          ))}
        </div>
      </div>
      <Scrollers scrollDiv={ref} />
    </>
  );
};
