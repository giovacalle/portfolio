import type { JSX, ParentProps } from 'solid-js';

type MessageBubbleProps = ParentProps & Omit<JSX.HTMLAttributes<HTMLDivElement>, 'classList'>;

const MessageBubble = (props: MessageBubbleProps) => {
  const { children, class: divClass = '', ...rest } = props;

  return (
    <div
      classList={{
        'relative w-full h-max p-3 rounded-lg rounded-bl-md rounded-br-none bg-pink text-lg text-white font-semibold':
          true,
        [divClass]: divClass !== ''
      }}
      {...rest}>
      <div class="absolute -bottom-2 right-0 w-0 h-0 border-8 border-solid border-transparent border-r-pink border-t-pink"></div>
      {children}
    </div>
  );
};

export default MessageBubble;
