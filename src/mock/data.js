import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'evolveWD ',
  name: 'web & development',
  subtitle: 'hai un progetto in mente?',
  cta: 'Scopri',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'a',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ast.png',
    title: 'AssistecTorino Store',
    info: 'Wordpress e Woocommerce',
    info2: 'Vendita online di articoli e servizi al privato e professionista. Tecnologie elettriche ed elettroniche, Home Automation, Safety e Comfort',
    url: 'https://www2.assistectorino.it',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'llc.png',
    title: 'Luca Lobina Concept Association',
    info: 'Wordpress e Woocommerce, multilingua',
    info2: 'La LLC Association, oltre a voler offrire messaggi intelligenti, creativi e positivi nella società, sostiene opere di beneficenza e progetti di formazione, permettendo  anche a nuove menti intelligenti e creative, di proporre la propria idea o il proprio progetto al fine di realizzarlo, integrandolo nelle attività dell’associazione stessa.',
    url: 'https://www2.assistectorino.it',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'Hai un progetto di cui vuoi parlare?',
  btn: 'Scrivimi',
  email: 'vincenzo.bevivino@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/enzo.bevivino',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/evolvewd_/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/evolvewd_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vincenzo-bevivino/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/evolvewd',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
