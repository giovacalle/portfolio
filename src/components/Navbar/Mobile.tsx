import { createSignal, Show, type ParentProps } from 'solid-js';

const Mobile = ({ children }: ParentProps) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <button
        role="button"
        class="sm:hidden hover:opacity-70 cursor-pointer z-20"
        title={isOpen() ? 'Close menu' : 'Open menu'}
        aria-label="Menu"
        onClick={() => setIsOpen(prev => !prev)}>
        <Show
          when={isOpen()}
          fallback={
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          }>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            />
          </svg>
        </Show>
      </button>
      <nav
        classList={{
          'h-screen w-screen fixed left-0 rounded-md backdrop-blur-sm bg-white/70 dark:bg-black-rich transition-opacity duration-300 z-10':
            true,
          ['top-0 opacity-100']: isOpen(),
          ['top-16 opacity-0 pointer-events-none']: !isOpen()
        }}>
        <div class="h-3/4">{children}</div>
      </nav>
    </>
  );
};

export default Mobile;
