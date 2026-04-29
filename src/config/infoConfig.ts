export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Fawwaz Ahmed'

export const headline =
  'Cybersecurity Master’s Student | Software Developer | Cloud & Machine Learning Enthusiast'

export const introduction =
  'I’m Fawwaz, a Cybersecurity Master’s student at the University of Liverpool with a background in software development. I enjoy building secure, scalable applications and working on real-world problems using modern technologies.'

export const email = 'fawwazahmedapple@gmail.com'

export const githubUsername = 'FawwazAhmd'


// about page
export const aboutMeHeadline =
  "I'm Fawwaz Ahmed, a Cybersecurity Master’s student with a passion for building secure and scalable systems."

export const aboutParagraphs = [
  "I am currently pursuing my Master’s in Cybersecurity at the University of Liverpool, with a strong foundation in Computer Science Engineering from BITS Pilani Dubai.",

  "I have hands-on experience in software development, cloud computing, and machine learning. I have worked on projects involving AWS, IoT systems, and predictive modeling, focusing on building efficient and real-world solutions.",

  "During my internships, I gained experience in frontend development and enterprise systems, working with technologies like React and ERP platforms. I enjoy solving complex problems and continuously learning new technologies in both development and security domains."
]


// blog
export const blogHeadLine = "Insights & Learnings"
export const blogIntro = "Thoughts on technology, cybersecurity, and software development."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/FawwazAhmd',
    external: true
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/fawwaz-ahmed/',
    external: true
  }
]


// tech stack icons
export const techIcons = [
  "typescript",
  "javascript",
  "python",
  "react",
  "nextdotjs",
  "tailwindcss",
  "nodedotjs",
  "aws",
  "docker",
  "git",
  "github",
  "linux",
  "mysql",
  "tensorflow",
  "raspberrypi"
];