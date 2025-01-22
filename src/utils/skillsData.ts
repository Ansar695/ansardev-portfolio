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
    company: 'Tech Innovators Inc.',
    position: 'Senior Software Engineer',
    duration: 'Jan 2020 - Present',
    description: 'Led development of cutting-edge web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.'
  },
  {
    company: 'Digital Solutions LLC',
    position: 'Full Stack Developer',
    duration: 'Mar 2017 - Dec 2019',
    description: 'Developed and maintained multiple client websites. Worked with a variety of technologies including Vue.js, Python, and AWS.'
  },
  {
    company: 'StartUp Ventures',
    position: 'Junior Developer',
    duration: 'Jun 2015 - Feb 2017',
    description: 'Assisted in the development of mobile applications using React Native. Gained experience in agile methodologies and test-driven development.'
  }
]

export const educationData: EducationItem[] = [
  {
    institution: 'Tech University',
    degree: 'Master of Science in Computer Science',
    duration: '2013 - 2015',
    description: 'Focused on advanced algorithms, machine learning, and software engineering practices. Graduated with honors.'
  },
  {
    institution: 'State College',
    degree: 'Bachelor of Science in Software Engineering',
    duration: '2009 - 2013',
    description: 'Comprehensive study of software development lifecycle, data structures, and computer networks. Participated in multiple hackathons.'
  },
  {
    institution: 'Online Learning Platform',
    degree: 'Various Certifications',
    duration: '2015 - Present',
    description: 'Continuously expanding knowledge through online courses in cloud computing, blockchain technology, and AI/ML.'
  }
]


import { TestimonialItem } from './types'

export const testimonialData: TestimonialItem[] = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    testimonial: "Working with this developer was a game-changer for our startup. Their technical expertise and ability to deliver on time exceeded our expectations. They're not just a coder, but a true problem solver.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "InnovateSoft",
    testimonial: "I've worked with many developers, but few have impressed me as much as this one. Their deep understanding of both frontend and backend technologies allowed us to build a robust, scalable solution.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "GlobalTech Solutions",
    testimonial: "What sets this developer apart is their ability to understand and contribute to the product vision. They don't just write code; they provide valuable insights that have helped shape our product roadmap.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "David Thompson",
    position: "Founder",
    company: "AI Innovations",
    testimonial: "This developer's expertise in AI and machine learning was instrumental in bringing our product to life. They have a rare ability to explain complex concepts in simple terms.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Lisa Wang",
    position: "UX Director",
    company: "DesignMasters",
    testimonial: "Their attention to detail in implementing our designs was impeccable. They consistently offered solutions that improved both the user experience and the overall performance of our application.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Alex Novak",
    position: "Lead Developer",
    company: "FintechFlow",
    testimonial: "Collaborating with this developer was a pleasure. Their code is clean, well-documented, and they're always open to feedback and continuous improvement. A true professional in every sense.",
    image: "/placeholder.svg?height=60&width=60"
  }
]

