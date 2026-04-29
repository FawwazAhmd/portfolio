// projects
export const projectHeadLine = "Projects I've Built"
export const projectIntro =
  "Here are some of the projects I’ve worked on, focusing on machine learning, cloud computing, and web development."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: 'Machine Learning-Based Automated Irrigation System',
    description:
      'Developed an IoT-based irrigation system using AWS IoT Core, Raspberry Pi, and MQTT. Implemented a Random Forest model achieving 0.0042 MAE for efficient water usage, along with a real-time monitoring dashboard.',
    link: { href: '#', label: 'View Project' },
    category: ['Machine Learning', 'IoT'],
    techStack: ['AWS IoT Core', 'Raspberry Pi', 'MQTT', 'Python'],
    tags: ['ML', 'IoT', 'Cloud']
  },
  {
    name: 'Sales Forecasting using Neural Networks',
    description:
      'Built a predictive sales forecasting model using TensorFlow and Keras. Improved accuracy through preprocessing and feature engineering, evaluated using MAE and R-squared metrics.',
    link: { href: '#', label: 'View Project' },
    category: ['Machine Learning'],
    techStack: ['Python', 'TensorFlow', 'Keras'],
    tags: ['Neural Networks', 'Prediction']
  },
  {
    name: 'Alisuq E-commerce Homepage Clone',
    description:
      'Designed and developed a responsive e-commerce homepage during internship, focusing on UI/UX design and performance optimization.',
    link: { href: 'https://alisuq-homepage.netlify.app/', label: 'Live Demo' },
    category: ['Web Development'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    tags: ['Frontend', 'UI/UX']
  },
  {
    name: 'AWS Hosted Website',
    description:
      'Deployed a web application on AWS infrastructure demonstrating cloud hosting, scalability, and server configuration.',
    link: { href: 'http://3.28.119.26/', label: 'Live Demo' },
    category: ['Cloud'],
    techStack: ['AWS', 'EC2', 'Linux'],
    tags: ['Cloud', 'Deployment']
  }
]

// GitHub projects (optional — keep empty for now)
export const githubProjects: Array<ProjectItemType> = []