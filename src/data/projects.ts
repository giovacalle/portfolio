import type { TProject } from '@custom-types/project';

export const PROJECTS: Array<TProject> = [
  {
    id: 'viteriaonline',
    title: 'ViteriaOnline',
    description: 'Website where buy large quantities of screws.',
    description_long: `ViteriaOnline is like an hybrid between B2B and B2C. This web-app offers a large catalogue of screws for retail. 
      It's mainly designed for companies which are looking for large supplies.`,
    images: [
      '/projects/viteriaonline.png',
      '/projects/viteriaonline_account.png',
      '/projects/viteriaonline_carrello.png'
    ],
    repo: '',
    website: 'https://www.viteriaonline.it',
    stack: ['Bootstrap (CSS)', 'Web Components', 'PHP (Plates)']
  },
  {
    id: 'node-chat-app',
    title: 'Chat app',
    description: 'Realtime chat app.',
    description_long: `This web-app is built with Node.js and Socket.io. It let users join a chat room and send messages to other users in the room.
      In addition, inside the chat room, users can share their location.`,
    images: [
      '/projects/node-chat-home.png',
      '/projects/node-chat-room.png',
      '/projects/node-chat-users-list.png'
    ],
    repo: 'https://github.com/giovacalle/node-chat-app',
    stack: ['Node.js', 'Socket.io', 'JS', 'HTML', 'CSS']
  },
  {
    id: 'tada-todo',
    title: 'Ta daa, to doo',
    description: 'An easy way to write down tasks "to-do".',
    description_long: `Simple web-app to write down your activities with minimalist style. 
      This application helped me master TS, Zustand and some notions about WPA. 
      At the moment data is just saved locally; I've planned to add sync feature over more devices.`,
    images: ['/projects/todo.png', '/projects/todo_add.png', '/projects/todo_completed.png'],
    repo: 'https://github.com/giovacalle/tada-todo',
    website: 'http://todo.giovacalle.dev/',
    stack: ['React.js', 'TS', 'Zustand', 'Vite', 'Tailwind CSS', 'react-icons']
  },
  {
    id: 'food-delivery',
    title: 'Food delivery',
    description: 'Concept of food delivery app.',
    description_long: `The website emulates a food delivery menu, with a short list of different meals, where the user can add/remove quantity and then complete the order in the cart. 
      This exercise helped me to approach ReactJS.`,
    images: ['/projects/food_delivery.png'],
    repo: 'https://github.com/giovacalle/food-delivery-app',
    website: 'http://fdelivery.giovacalle.dev/',
    stack: ['React.js', 'CSS']
  }
];

export const getProject = (id: string): TProject | undefined => {
  return PROJECTS.find(project => project.id === id);
};
