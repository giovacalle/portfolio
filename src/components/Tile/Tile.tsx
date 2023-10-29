import type { JSX, ParentProps } from 'solid-js';

type TileProps = ParentProps &
  Omit<JSX.HTMLAttributes<HTMLDivElement>, 'classList'> & {
    round?: boolean;
    circle?: boolean;
  };

const Tile = (props: TileProps) => {
  const { round = false, circle = false, children, class: divClass = '', ...rest } = props;

  return (
    <div
      classList={{
        'w-full aspect-square overflow-hidden': true,
        'rounded-lg': round,
        '!w-[80%] rounded-full': circle,
        [divClass]: divClass !== ''
      }}
      {...rest}>
      {children}
    </div>
  );
};

export default Tile;
