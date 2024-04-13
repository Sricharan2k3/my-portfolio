// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sricharan2k3', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/sricharan2k3/sricharan2k3.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/sricharan2k3/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['sricharan2k3/my-project1', 'sricharan2k3/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['sricharan2k3/Elearning', 'sricharan2k3/Machine-Learning', 'sricharan2k3/Connect-Four---A-basic-game-based-on-jQuery', 'sricharan2k3/Blogify-Django-blog-platform'], // List of repository names to display. example: ['sricharan2k3/my-project1', 'sricharan2k3/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Library Management System',
          description:
            'This project is a comprehensive Library Management System developed using Django, a high-level Python web framework, with MySQL as the backend database. The system aims to automate and streamline library operations, including cataloging, circulation, and patron management.',
          imageUrl:
            'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/473e6-library-in-hyderabad.jpg?fit=1000%2C500&ssl=1',
          link: 'https://github.com/Sricharan2k3/LIMS',
        },
        {
          title: 'Portfolio-builder',
          description:
            'This is an effective portfolio builder enabling you to craft a personalized portfolio site swiftly, even without coding skills. Just input your GitHub username, and Portfolio-builder will swiftly generate a portfolio for you.',
          imageUrl:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.codementor.io%2Flearn-programming%2F12-important-things-to-include-in-web-dev-portfolios&psig=AOvVaw11eM3zqL-an1d_CSjwNm62&ust=1713090993598000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCviNr_voUDFQAAAAAdAAAAABAE',
          link: 'https://github.com/Sricharan2k3/Portfolio',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sricharan Nama',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'sri-charan-nama-507581249',
    substack: 'sricharannama',


    researchGate: '',
    facebook: '',
    instagram: 'sricharannama',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'namasricharan',
    // dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    // website: 'https://www.sricharan2k3.com',
    phone: '7742796678',
    email: 'namasricharan@gmail.com',
  },
  resume: {
    fileUrl:
      'https://jmp.sh/s/cMS1vW5xQSTWnKQz0Nr2', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'AWS',
    'Jenkins',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Terraform',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  certifications: [
    {
      name: 'Ultimate AWS Certified Solutions Architect Associate SAA-C03',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Mar 2024',
      link: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03',
    },
    {
      name: 'Fundamentals On Java ',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Jan 2023',
      link: 'https://learn.oracle.com/ols/learning-path/java-fundamentals/55593/55578',
    },
    {
      name: 'The Complete 2023 Web Development Bootcamp',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Oct 2022',
      link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp',
    },


  ],
  educations: [
    {
      institution: 'Chaitanya Bharathi Institute Of Technology',
      degree: 'B.E',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Aspirants',
      degree: 'Intermediate',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'K.V Picket',
      degree: 'Secondary School',
      from: '2016',
      to: '2019',
    },

  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'namasricharan', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/sricharan2k3/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
