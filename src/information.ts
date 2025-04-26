import { skipUntil } from 'rxjs';

//todo: Splash Screen
const splashScreen = {
  enabled: true,
  duration: 2000,
};

const introduction = {
  username: 'Keyur Asodariya',
  title: "I'm Keyur.",
  welcomeAvatar: '../../assets/images/welcomeAvatar.png',
  subTitle: `I\'m a passionate Senior Software Engineer 👨‍💻 from Ahmedabad, India. I love building innovative 
  solutions using .NET Core, Azure, and Angular. Solving problems, boosting efficiency, and 
  scaling systems in the cloud is what keeps me excited every day 🚀. 
  Always eager to learn, collaborate, and create better tech.
  \nWant to discuss a project or just say hi? My inbox is always open — let's connect!`,
  resumeLink:
    'https://drive.google.com/file/d/1LFj-zHN1GYS6RJGMXbXlyTnNwBCdF352/view?usp=sharing',
  display: true,
};

const socialMediaLinks = {
  github: 'https://github.com/keyur9874',
  linkedin: 'https://www.linkedin.com/in/keyur-asodariya9/',
  gmail: 'asodariyakeyur987@gmail.com',
  gitlab: '',
  medium: '',
  stackoverflow: '',
  display: true,
};

const skillsSection = {
  title: 'About Me',
  skillsAvatar: '../../assets/images/studying.png',
  subTitle: 'A passionate developer who loves exploring different technologies',
  skills: [
    `👋 I\'m a passionate Software Developer with a strong foundation in building scalable and user-centric applications.`,
    `💻 My love for technology began early, and programming quickly became my true calling during high school.`,
    `🎓 I hold a Bachelor\'s degree in Information Technology and specialize in data structures, algorithms, and cloud-native development.`,
    `☁️ I\'m certified in Microsoft Azure Fundamentals (AZ-900) and Azure Developer Associate (AZ-204), showcasing my expertise in cloud application design and deployment.`,
    `🚀 I thrive on solving tough problems, optimizing performance, and creating solutions that make a real impact.`,
    `🎵 Outside of tech, I recharge my creativity by listening to music and spending time in nature.`,
    `📬 Let\'s connect — I\'m always open to exciting opportunities and collaborations!`,
  ],

  /* Make Sure to add badge links from https://github.com/alexandresanlim/Badges4-README.md-Profile */
  softwareSkillsHeader: "Technologies I've dipped my toes in...",
  softwareSkillsImage: '../../assets/images/reading.png',
  softwareSkills: [
    {
      skillName: '.Net Core',
      badgeURL:
        'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
    },
    {
      skillName: 'Blazor',
      badgeURL:
        'https://img.shields.io/badge/Blazor-512BD4?style=for-the-badge&logo=blazor&logoColor=white',
    },
    {
      skillName: 'C#',
      badgeURL:
        'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white',
    },
    {
      skillName: 'Entity Framework',
      badgeURL:
        'https://img.shields.io/badge/Entity_Framework-0076B8?style=for-the-badge&logo=Microsoft&logoColor=white',
    },
    {
      skillName: 'Dapper',
      badgeURL:
        'https://img.shields.io/badge/Dapper-0077B5?style=for-the-badge&logo=Microsoft&logoColor=white',
    },
    {
      skillName: 'LINQ',
      badgeURL:
        'https://img.shields.io/badge/LINQ-FF6F00?style=for-the-badge&logo=Microsoft&logoColor=white',
    },
    {
      skillName: 'AKS',
      badgeURL:
        'https://img.shields.io/badge/AKS-0078D4?style=for-the-badge&logo=azure-kubernetes-service&logoColor=white',
    },
    {
      skillName: 'Microsoft Azure',
      badgeURL:
        'https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white',
    },
    {
      skillName: 'Azure DevOps',
      badgeURL:
        'https://img.shields.io/badge/Azure_DevOps-0078D7?style=for-the-badge&logo=azure-devops&logoColor=white',
    },
    {
      skillName: 'Azure Functions',
      badgeURL:
        'https://img.shields.io/badge/Azure_Functions-0062AD?style=for-the-badge&logo=azure-functions&logoColor=white',
    },
    {
      skillName: 'Microsoft SQL Server',
      badgeURL:
        'https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white',
    },
    {
      skillName: 'My SQL',
      badgeURL:
        'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white',
    },
    {
      skillName: 'Mongo DB',
      badgeURL:
        'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
    },
    {
      skillName: 'JavaScript',
      badgeURL:
        'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
    },
    {
      skillName: 'TypeScript',
      badgeURL:
        'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    },
    {
      skillName: 'Angular',
      badgeURL:
        'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
    },
    // {
    //   skillName: 'Node.js',
    //   badgeURL:
    //     'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    // },
    // {
    //   skillName: 'Express.js',
    //   badgeURL:
    //     'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    // },
    // {
    //   skillName: 'React.js',
    //   badgeURL:
    //     'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    // },
    // {
    //   skillName: 'MongoDB',
    //   badgeURL:
    //     'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
    // },
    {
      skillName: 'Git',
      badgeURL:
        'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
    },
    {
      skillName: 'GraphQL',
      badgeURL:
        'https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white',
    },
    {
      skillName: 'Redis',
      badgeURL:
        'https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white',
    },
    {
      skillName: 'Swagger',
      badgeURL:
        'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white',
    },
  ],
  display: true,
};

//include education, work expericence and others
const myJourney = {
  display: true,
  experience: [
    {
      role: 'Computer Engineer',
      short_note: 'Student',
      company: 'Government Enginnering College - Gandhinagar',
      companyLogo: '../../assets/images/veloxcore.jpeg',
      date: 'Aug 2018 – Mar 2022',
      desc: '',
      keyNotes: [
        'Favorite Subject: Data structures and different Algorithms.',
        'Anna University - Rank holder - 22.',
        'Served as the class representative and coordinated various activities for my batch for four years',
        'Coordinated Astra - 2K19 National symposium conducted by department.',
      ],
    },
    {
      role: 'Software Engineer',
      // short_note: 'Software developer',
      company: 'Veloxcore Private Limited',
      companyLogo: '../../assets/images/veloxcore.jpeg',
      date: 'Sep 2021 – Mar 2025',
      desc: '',
      keyNotes: [
        'Favorite Subject: Data structures and different Algorithms.',
        'Anna University - Rank holder - 22.',
        'Served as the class representative and coordinated various activities for my batch for four years',
        'Coordinated Astra - 2K19 National symposium conducted by department.',
      ],
    },
    {
      role: 'Senior Software Enginner',
      company: 'Veloxcore Private Limited',
      // short_note: 'Senior Software Enginner',
      companyLogo: '../../assets/images/veloxcore.jpeg',
      date: 'Apr 2025 – Present',
      desc: '',
      keyNotes: [
        'Explored Scala, Apache Spark 3 and Apache Cassandra.',
        'Developed a module in an ongoing project which processes large volumes of financial data to compute complex tax calculations.',
        'Understood complex tax calculation requirements and rewrote an existing module and improved processing performance by 50%.',
      ],
    },
  ],
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */
const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using GitHub, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: 'Achievements And Certifications 🏆 ',
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'AZ-204 Azure Developer',
      subtitle: 'Azure',
      image: '../../assets/images/az204.png',
      imageAlt: 'AZ 204',
      footerLink: [
        {
          name: 'View certificate',
          url: 'https://learn.microsoft.com/api/credentials/share/en-us/KeyurAsodariya-2530/CB053A822854BFE?sharingId=C209FD4B6B1397C7',
        },
      ],
    },
    {
      title: 'AI-102 Azure AI Enginner',
      subtitle: 'Azure',
      image: '../../assets/images/ai102.png',
      imageAlt: 'AI 102',
      footerLink: [
        {
          name: 'View certificate',
          url: 'https://learn.microsoft.com/api/credentials/share/en-us/KeyurAsodariya-2530/46AE28A1F4C983FF?sharingId=C209FD4B6B1397C7',
        },
      ],
    },

    {
      title: 'Azure Fundamentals',
      subtitle: 'Azure',
      image: '../../assets/images/az900.png',
      imageAlt: 'AZ 900',
      footerLink: [
        {
          name: 'View certificate',
          url: 'https://learn.microsoft.com/api/credentials/share/en-us/KeyurAsodariya-2530/722DA5B3D63C2E26?sharingId=C209FD4B6B1397C7',
        },
      ],
    },
    {
      title: 'SQL (Intermidiate)',
      subtitle: 'Hackerrank',
      image: '../../assets/images/sql.png',
      imageAlt: 'SQL',
      footerLink: [
        {
          name: 'View certificate',
          url: 'https://www.hackerrank.com/certificates/iframe/1966e2dfcbfe',
        },
      ],
    },
  ],
  display: true,
};

export {
  introduction,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  myJourney,
  openSource,
  achievementSection,
};
