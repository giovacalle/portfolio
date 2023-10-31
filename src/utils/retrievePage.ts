import avatar from '/avatar.jpg?url';

type Page = astroHTML.JSX.IntrinsicElements['div'] & {
  icon?: string;
};
export const retrievePage = (page: string): Page | undefined => {
  const pages: { [key: string]: Page } = {
    '/me': {
      style: {
        backgroundImage: `url(${avatar})`
      },
      class: 'bg-cover bg-bottom bg-no-repeat'
    },
    '/techs': {
      icon: 'mdi:code',
      class: 'bg-gradient-to-r from-violet-400 to-red-500'
    },
    '/projects': {
      icon: 'mdi:draw',
      class: 'bg-gradient-to-r from-green to-blue-500'
    }
  };

  return pages[page];
};
