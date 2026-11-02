import { Server, Database, Code, Globe, CodepenIcon as ReactIcon, Leaf } from 'lucide-react'
import { EducationItem, ExperienceItem } from './types'

export const skillsData = {
  Frontend: [
    {
      name: 'React',
      description: 'Building interactive UIs with reusable components',
      icon: ReactIcon,
    },
    {
      name: 'Next.js',
      description: 'Creating server-side rendered and static websites',
      icon: Globe,
    },
    {
      name: 'TypeScript',
      description: 'Adding static typing to enhance code quality',
      icon: Code,
    },
  ],
  Backend: [
    {
      name: 'Node.js',
      description: 'Running JavaScript on the server-side',
      icon: Server,
    },
    {
      name: 'Express.js',
      description: 'Building robust and scalable web applications',
      icon: Leaf,
    },
  ],
  Database: [
    {
      name: 'MongoDB',
      description: 'Storing and retrieving data with NoSQL database',
      icon: Database,
    },
  ],
}


export const experienceData: ExperienceItem[] = [
  
  {
    company: 'Machine intelligence 6',
    position: 'Team Lead | Fullstack Developer',
    duration: 'Jun 2023 - Present',
    description: 'Leading a development team to deliver scalable, high-performance applications, ensuring code quality, best practices, and timely delivery'
  },
  {
    company: 'Autoadvisers',
    position: 'Full Stack Developer',
    duration: 'Mar 2022 - Dec 2023',
    description: 'Developed and maintained from sratch to full fledged. Worked with a variety of technologies including NextJS, ReactJS, MUI Bootstrap, Tailwind and cloud platforms like AWS.'
  },
  {
    company: 'Emumba Pvt Ltd.',
    position: 'Junior Software Engineer',
    duration: 'Jan 2021 - 2022',
    description: 'Led development of cutting-edge web applications using React and Node.js. Implemented CI/CD pipelines and learned new tools.'
  },
]

export const educationData: EducationItem[] = [
  {
    institution: 'University of Sargodha',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2018 - 2022',
    description: 'Focused on advanced algorithms, machine learning, and software engineering practices. Graduated with honors.'
  },
  {
    institution: 'Superior group of colleges',
    degree: 'FSc Pre-engineering',
    duration: '2016 - 2018',
    description: 'Comprehensive study of software development lifecycle, data structures, and computer networks. Participated in multiple hackathons.'
  }
]


import { TestimonialItem } from './types'

export const testimonialData: TestimonialItem[] = [
  {
    name: "Jamie",
    testimonial: "Working with this developer was a game-changer for our startup. Their technical expertise and ability to deliver on time exceeded our expectations. They're not just a coder, but a true problem solver.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Json Smith",
    testimonial: "I've worked with many developers, but few have impressed me as much as this one. Their deep understanding of both frontend and backend technologies allowed us to build a robust, scalable solution.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Awais Khan",
    testimonial: "What sets this developer apart is their ability to understand and contribute to the product vision. They don't just write code; they provide valuable insights that have helped shape our product roadmap.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Mubashir Ali",
    testimonial: "This developer's expertise in MERN stack was instrumental in bringing our product to life. They have a rare ability to explain complex concepts in simple terms.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Ali Raza",
    testimonial: "Their attention to detail in implementing our designs was impeccable. They consistently offered solutions that improved both the user experience and the overall performance of our application.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Alex Novak",
    testimonial: "Collaborating with this developer was a pleasure. Their code is clean, well-documented, and they're always open to feedback and continuous improvement. A true professional in every sense.",
    image: "/placeholder.svg?height=60&width=60"
  }
]

