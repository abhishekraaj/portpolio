import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Abhishek Raj',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'ABHISHEK RAJ',
  role: 'Frontend developer',
  description:
    'I am Trainee At functionUp as a frontend Developer , A frontend developer is a professional who specializes in designing and building the user-facing portion of a website or application. Frontend developers typically use programming languages such as HTML, CSS, and JavaScript to create the visual and interactive elements that users interact with',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/abhishek-raj-a09837158/',
    github: 'https://github.com/abhishekraaj',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Twitter',
    description:
      ' Use Twitter to build your personal or brands social media presence. Start by creating a Twitter account and consistently posting updates relevant to your niche. Engage with your followers and other users in your industry by retweeting, commenting, and sharing their content.',
    stack: [ 'Html' , 'CSS' , 'React' ,'Javascript' , 'Recoil' ],
    sourceCode: 'https://github.com/abhishekraaj/Twiteer.git',
    livePreview: 'https://twiteer-abhishekraaj.vercel.app/',
  },
  {
    name: 'Gym Website',
    description:
      'A gym website project is an online platform that promotes a gym or fitness center and its services to potential customers. Here are some key components that could be included in a gym website project:',
    stack: ['React.js', 'Javascript', 'React Hook' , 'html' , 'css'],
    sourceCode: 'https://github.com/abhishekraaj/GYM-Project.git',
    livePreview: 'https://illustrious-starlight-f12b2b.netlify.app/',
  },
  {
    name: 'My Travell',
    description:
      'A travel hotel booking website is an online platform that allows users to search and book hotel accommodations for their travels. Here are some key components that could be included in a travel hotel booking website',
    stack: ['html-css-javascript', 'React Hook', 'React'],
    sourceCode: 'https://github.com/abhishekraaj/mytravell.git',
    livePreview: 'https://vocal-genie-6006cb.netlify.app/',
  },
  {
    name: 'Google Docs',
    description:
      'A Google Docs clone project is an online word processing platform that allows users to create and edit documents in a collaborative environment. Here are some key components that could be included in a Google Docs clone project',
    stack: ['JavaScript ', 'Html' , 'CSS'  ],
    sourceCode: 'https://github.com/abhishekraaj/GoogleDocsProject5.git',
    livePreview: 'https://dashing-kitsune-e77995.netlify.app/',

  },
  {
    name: 'BirthdayApp',
    description:
      'A birthday app project is a mobile application that helps users manage and remember birthdays of friends and family. Here are some key components that could be included in a birthday app project',
    stack: ['html-css-javascript', 'React'],
    sourceCode: 'https://github.com/abhishekraaj/BirthDay---react-ev7tjj.git',
    livePreview: 'https://google-docs-project5-omaq.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Material UI',
  'Git',
  'AutoCad',
  'catia V5',
  'NX 12',
  'CNC Programming'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ankitkumar03312@gmail.com',
}

export { header, about, projects, skills, contact }
